import { Button, Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
function Poll(props) {
  return (
    <>
      <Typography variant="h2" component={"h1"} sx={{ mx: "auto", my: 0 }}>
        Create a Poll
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
          <OptionsColumn />
          <Button variant="contained" color="warning" type="submit">
            Add Option
          </Button>
        </div>
      </Container>
    </>
  );
}
export default Poll;
