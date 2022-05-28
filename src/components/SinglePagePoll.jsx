import { useParams } from "react-router-dom";

function SinglePagePoll(props) {
  const { id } = useParams();
  console.log(id);
  return <h1>I am a single page poll </h1>;
}
export default SinglePagePoll;
