import React from "react";
import { useNavigate } from "react-router";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { motion } from "framer-motion";

function SinglePoll(props) {
  const variants = {
    whiletap: {
      scale: 0.9,
      duration: 0.2,
      transition: "tween",
    },
  };
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
    <motion.div
      variants={variants}
      animate={{ y: 20 }}
      transition={{ duration: 1 }}
      whileTap="whiletap"
      layout
    >
      <Card
        sx={{
          margin: "1em",
          boxShadow: "3px 3px 14px -9px rgba(0,0,0,0.75)",
        }}
      >
        <CardContent>
          <CardActionArea onClick={handleClick}>
            <div className="poll">
              <h1>{state.title}</h1>
              <p>{state.description}</p>
              <p>{totalVotes} votes</p>
            </div>
          </CardActionArea>
        </CardContent>
        {/* <div className="shadow-1"></div>
      <div className="shadow-2"></div> */}
      </Card>
    </motion.div>
  );
}
export default SinglePoll;
