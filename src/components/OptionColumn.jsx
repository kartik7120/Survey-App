import Option from "./Option";
import ErrorIcon from "@mui/icons-material/Error";
function OptionsColumn(props) {
  return (
    <div className="optionGrid">
      <div>
        <Option />
        <Option />
      </div>
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
