import PollChoice from "../components/pollChoice";

function SinglePoll(props) {
  const totalVotes = props.votes.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  return (
    <div className="poll">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{totalVotes} votes</p>
      <PollChoice options={props.options} votes={props.votes}/>
    </div>
  );
}
export default SinglePoll;
