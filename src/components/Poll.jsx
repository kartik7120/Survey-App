import { Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import Option from "./Option";
function Poll(props) {
  return (
    <>
      <Typography variant="h2" component={"h1"}>
        I am an h1
      </Typography>
      <Container maxWidth="md">
        <div className="poll--create">
          <Title />
          <Divider orientation="vertical" flexItem>
            <hr />
          </Divider>
          <PollTextArea />
          <Divider orientation="vertical" flexItem>
            <hr />
          </Divider>
          <div className="optionGrid">
            <div>
              <Option />
              <Option />
            </div>
            <div className="side-list-on-poll">
              <ol>
                <li>Suggest short clear options</li>
                <li>The more options, the better</li>
                <li>Choose the poll duration</li>
                <li>Options can't be edited after post creation</li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Poll;
