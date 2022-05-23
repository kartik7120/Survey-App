import {
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
} from "@mui/material";
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
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
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
                <div className="no-of-option-vote">{props.votes[index]}</div>
                <LinearProgress
                  variant="determinate"
                  value={props.votes[index]}
                  valueBuffer={0}
                  color="secondary"
                  sx={{ height: "0.5em", display: "block" }}
                />
              </>
            );
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
export default PollChoice;
