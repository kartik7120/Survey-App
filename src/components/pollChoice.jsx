import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import PollAfterSubmit from "./PollAfterSubmit";
import "../style.css";
import { motion } from "framer-motion";
import { signInContext } from "./Navbar";

function PollChoice(props) {
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  const [voteButtonState, setvoteButtonState] = React.useState(
    props.voteButtonState
  );

  React.useEffect(
    function () {
      props.userVoted.map((userId) => {
        if (userId === signInState._id) {
          setvoteButtonState(true);
        }
        return 1;
      });
    },
    [signInState._id, props.userVoted]
  );

  const variants = {
    hover: {
      scale: 1.05,
    },
  };

  function handleChange(e) {
    props.setState(function (oldState) {
      return {
        ...oldState,
        targetValue: e.target.value,
      };
    });
  }

  return (
    <>
      {voteButtonState || props.voteButtonState ? (
        <PollAfterSubmit options={props.options} votes={props.votes} />
      ) : (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={props.options[0]}
            name="radio-buttons-group"
          >
            {props.options.map((option, index) => {
              return (
                <div className="wrapper" key={index * 10}>
                  <motion.div
                    animate={{ scale: 1 }}
                    variants={variants}
                    transition={{ duration: 0.4 }}
                    whileHover="hover"
                    layout
                  >
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
export default PollChoice;
