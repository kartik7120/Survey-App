import PollChoice from "../components/pollChoice";

function SinglePoll(props) {
  return (
    <div className="poll">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>I am total number of votes</p>
      <PollChoice />
    </div>
  );
}
export default SinglePoll;
