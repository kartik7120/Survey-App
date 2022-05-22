import Option from "./Option";
import ErrorIcon from "@mui/icons-material/Error";

function OptionsColumn(props) {
  let optionArray = [];
  if (props.optionCount <= 6) {
    for (let i = 1; i <= props.optionCount; i++) {
      optionArray.push(
        <Option
          key={i * 10}
          optionNo={i}
          deleteOption={props.deleteOption}
          handleOptionChange={props.handleOptionChange}
          formState={props.formState}
        />
      );
    }
  }
  return (
    <div className="optionGrid">
      <div>{optionArray}</div>
      <div className="side-list-on-poll">
        <ol>
          <span>
            <ErrorIcon /> Tips on Better Polls
          </span>
          <li>Suggest short clear options</li>
          <li>The more options, the better</li>
          <li>Choose the poll duration</li>
          <li>Options can't be edited after post creation</li>
        </ol>
      </div>
    </div>
  );
}
export default OptionsColumn;
