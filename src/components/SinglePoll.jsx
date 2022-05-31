import React from "react";
import { useNavigate } from "react-router";
import { Card, CardActionArea, CardContent } from "@mui/material";
import "../allPolls.css";
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
    <Card onClick={handleClick}>
      <CardContent>
        <CardActionArea>
          <div className="poll">
            <h1>{state.title}</h1>
            <p>{state.description}</p>
            <p>{totalVotes} votes</p>
          </div>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
export default SinglePoll;
