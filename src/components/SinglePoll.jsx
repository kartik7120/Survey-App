import React from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
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
  const [state, setState] = React.useState({
    id: props.id,
    title: props.title,
    description: props.description,
    options: props.options,
    votes: props.votes,
    flair: props.flair,
  });

  React.useEffect(
    function () {
      setState(function (oldState) {
        return {
          ...oldState,
          id: props.id,
          title: props.title,
          description: props.description,
          options: props.options,
          votes: props.votes,
        };
      });
    },
    [props]
  );

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
      style={{
        minWidth: "30em",
        width: "80%",
        maxWidth: "50em",
        margin: "0 auto",
      }}
    >
      <Card
        sx={{
          margin: "1em",
          boxShadow: "3px 3px 14px -9px rgba(0,0,0,0.75)",
          borderRadius: "2em",
        }}
      >
        <CardContent>
          <CardActionArea onClick={handleClick} sx={{ borderRadius: "2em" }}>
            <div className="poll">
              <h1>{state.title}</h1>
              <p>{state.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    padding: "0.5em",
                  }}
                >
                  <Chip color="info" label={`${totalVotes} votes`} />
                </Typography>
                {state.flair ? (
                  <Chip color="secondary" label={state.flair} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </CardActionArea>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default SinglePoll;
