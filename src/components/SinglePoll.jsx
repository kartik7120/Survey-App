// import { Button } from "@mui/material";
import React from "react";
// import PollChoice from "../components/pollChoice";
import { signInContext } from "./Navbar";
import { useNavigate } from "react-router";

function SinglePoll(props) {
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  const [state, setState] = React.useState({
    id: props.id,
    title: props.title,
    description: props.description,
    options: props.options,
    votes: props.votes,
    targetValue: props.options[0],
  });

  const totalVotes = props.votes.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

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
    <div className="poll">
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1>{state.title}</h1>
        <p>{state.description}</p>
        <p>{totalVotes} votes</p>
        {/* <PollChoice
          options={state.options}
          votes={state.votes}
          setState={setState}
        /> */}
        {/* <Button variant="contained" color="warning" type="submit">
          Vote
        </Button> */}
      </form>
    </div>
  );
}
export default SinglePoll;
