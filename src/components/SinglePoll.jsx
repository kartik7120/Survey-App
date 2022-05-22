import { Button } from "@mui/material";
import PollChoice from "../components/pollChoice";
function SinglePoll(props) {
  const totalVotes = props.votes.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit event emitted");
    const fetchConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({ name: "Kogami" }),
    };
    fetch("http://localhost:9000/poll/updateVotes", fetchConfig)
      .then((jsonData) => jsonData.json())
      .then((data) => console.log("Data recieved from patch request", data))
      .catch((err) =>
        console.log("Error occured while making a PATCH request", err)
      );
  }

  return (
    <div className="poll">
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{totalVotes} votes</p>
        <PollChoice options={props.options} votes={props.votes} />
        <Button variant="contained" color="warning" type="submit">
          Vote
        </Button>
      </form>
    </div>
  );
}
export default SinglePoll;
