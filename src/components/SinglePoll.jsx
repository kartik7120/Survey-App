import React from "react";
import { useNavigate } from "react-router";

function SinglePoll(props) {
  let navigate = useNavigate();
  const [state] = React.useState({
    id: props.id,
    title: props.title,
    description: props.description,
    options: props.options,
    votes: props.votes,
  });

  const totalVotes = props.votes.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

  function handleClick(e) {
    navigate(`/poll/${state.id}`);
  }

  return (
    <div className="poll" onClick={handleClick}>
      <h1>{state.title}</h1>
      <p>{state.description}</p>
      <p>{totalVotes} votes</p>
    </div>
  );
}
export default SinglePoll;
