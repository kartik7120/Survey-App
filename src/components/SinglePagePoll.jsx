import { useParams } from "react-router-dom";
import { signInContext } from "./Navbar";
import { useNavigate } from "react-router";
import React from "react";
import { Button } from "@mui/material";
function SinglePagePoll(props) {
  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  const [state, setState] = React.useState({
    id: props.id,
    title: props.title,
    description: props.description,
    options: props.options,
    votes: props.votes,
    // targetValue: props.options[0],
  });

  React.useEffect(
    function () {
      fetch(`/poll/allPolls/${id}`)
        .then((jsonData) => jsonData.json())
        .then((data) =>
          console.log("Data revieved from allPolls/:id route", data)
        )
        .catch((err) =>
          console.log(
            "Error occured while fetching data from allPolls/:id route",
            err
          )
        );
    },
    [id]
  );

  //   const totalVotes = props.votes.reduce(
  //     (prevValue, currValue) => prevValue + currValue,
  //     0
  //   );
  function handleSubmit(e) {
    if (signInState !== false) {
      e.preventDefault();
      const fetchConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(state),
      };
      fetch(`/poll/updateVotes/${state.id}`, fetchConfig)
        .then((jsonData) => jsonData.json())
        .then((data) => {
          console.log("Data recieved from patch request", data);
          const objData = JSON.parse(data);
          console.log(objData);
          setState(function (oldState) {
            return {
              ...oldState,
              id: objData._id,
              title: objData.title,
              options: objData.options,
              votes: objData.votes,
              description: objData.description,
            };
          });
        })
        .catch((err) =>
          console.log("Error occured while making a PATCH request", err)
        );
    } else {
      navigate("/Signup");
    }
  }

  return (
    <>
      <h1>I am a single page poll </h1>
      <Button variant="contained" color="warning" type="submit">
        Vote
      </Button>
    </>
  );
}
export default SinglePagePoll;
