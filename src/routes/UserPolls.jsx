import React from "react";
import { profileUserContext } from "./Profile";
import { useNavigate } from "react-router-dom";
import SinglePoll from "../components/SinglePoll";
import { Pagination } from "@mui/material";

let pollDataPagination = [];

function UserPolls(props) {
  let navigate = useNavigate();
  const [userPollsState, setUserPollsState] = React.useState(null);
  let signInObject = React.useContext(profileUserContext);
  const signInState = signInObject.signInState;
  const [, setPaginationState] = React.useState(1);

  React.useEffect(
    function () {
      if (signInState.isAuthenticated !== false) {
        fetch(`/users/${signInState._id}`)
          .then((jsonData) => jsonData.json())
          .then((data) => {
            console.log("Data recieved from the /users/:id", data);
            const body = JSON.parse(data);
            const pollArray = body.polls.map((obj) => {
              if (pollDataPagination.length <= 3) {
                pollDataPagination.push({
                  _id: obj._id,
                  title: obj.title,
                  description: obj.description,
                  votes: obj.votes,
                });
              }
              return {
                _id: obj._id,
                title: obj.title,
                description: obj.description,
                votes: obj.votes,
              };
            });
            setUserPollsState(pollArray);
          })
          .catch((err) =>
            console.log(
              "Error occured while fetching data from /users/:id",
              err
            )
          );
      } else navigate("../Signup");
    },
    [navigate, signInState._id, signInState.isAuthenticated]
  );

  function paginationFunction(event, currPage) {
    let skip = (currPage - 1) * 3;
    let limit = 3;
    let i = 0;

    for (i = 0; i < userPollsState.length; i++) {
      console.log("Hello from the inner for loop");
      if (i === skip) break;
    }

    console.log("Value of i after the skip loop = ", i);

    pollDataPagination = [];

    while (i < userPollsState.length && pollDataPagination.length <= limit) {
      console.log(
        "Value of userPollState in the while loop = ",
        userPollsState[i]
      );
      pollDataPagination.push(userPollsState[i]);
      i++;
    }

    console.log(
      "Value of pollDataPagination after adding values in it = ",
      pollDataPagination
    );

    setPaginationState(currPage);
  }

  return (
    <>
      {pollDataPagination ? (
        <>
          {pollDataPagination.map((ele, index) => (
            <SinglePoll
              id={ele._id}
              title={ele.title}
              description={ele.description}
              key={index * 102}
              votes={ele.votes}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination
              count={userPollsState ? Math.ceil(userPollsState.length / 3) : 1}
              color="secondary"
              sx={{ margin: "5% auto", display: "block" }}
              size="large"
              onChange={paginationFunction}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default UserPolls;
