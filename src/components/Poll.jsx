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
          <Option />
          <Option />
        </div>
      </Container>
    </>
  );
}
export default Poll;
