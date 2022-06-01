import {
  FormControl,
  FormControlLabel,
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
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={props.options[0]}
            name="radio-buttons-group"
          >
            {props.options.map((option, index) => {
              return (
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                  onChange={handleChange}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
export default PollChoice;
