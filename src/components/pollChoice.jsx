import {
  FormControl,
  FormControlLabel,
  // FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import PollAfterSubmit from "./PollAfterSubmit";
import "../style.css";

function PollChoice(props) {
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
      {props.voteButtonState ? (
        <PollAfterSubmit options={props.options} votes={props.votes} />
      ) : (
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={props.options[0]}
            name="radio-buttons-group"
          >
            <div className="all-polls-vote-column">
              {props.options.map((option, index) => {
                return (
                  <>
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                      onChange={handleChange}
                    />
                    <div className="no-of-option-vote">
                      {props.votes[index]}
                    </div>
                  </>
                );
              })}
            </div>
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
export default PollChoice;
