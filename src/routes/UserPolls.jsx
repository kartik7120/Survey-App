import React from "react";
import { profileUserContext } from "./Profile";
import { useNavigate } from "react-router-dom";
import SinglePoll from "../components/SinglePoll";
function UserPolls(props) {
  let navigate = useNavigate();
  const [userPollsState, setUserPollsState] = React.useState(null);
  let signInObject = React.useContext(profileUserContext);
  console.log("signInObject in userPolls route = ", signInObject);
  const signInState = signInObject.signInState;

  React.useEffect(function () {
    if (signInState.isAuthenticated !== false) {
      fetch(`/users/${signInState._id}`)
        .then((jsonData) => jsonData.json())
        .then((data) => {
          console.log("Data recieved from the /users/:id", data);
          const body = JSON.parse(data);
          const pollArray = body.polls.map((obj) => {
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
          console.log("Error occured while fetching data from /users/:id", err)
        );
    } else navigate("../Signup");
  }, []);
  return (
    <>
      <h1>I am user polls route</h1>
      {userPollsState
        ? userPollsState.map((ele, index) => (
            <SinglePoll
              id={ele._id}
              title={ele.title}
              description={ele.description}
              key={index * 102}
              votes={ele.votes}
            />
          ))
        : ""}
    </>
  );
}
export default UserPolls;
