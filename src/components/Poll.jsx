import { Button, Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
import React from "react";

function Poll(props) {
  const [state, setState] = React.useState(2);

  function handleClick(e) {
    if (state < 6) setState((oldState) => oldState + 1);
  }

  function deleteOption(e) {
    setState((oldState) => oldState - 1);
  }

  return (
    <>
      <Typography
        variant="h2"
        component={"h1"}
        sx={{ textAlign: "center", marginBottom: "0.7em" }}
      >
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
          <OptionsColumn optionCount={state} deleteOption={deleteOption} />
          <Button
            variant="contained"
            color="warning"
            type="submit"
            onClick={handleClick}
          >
            Add Option
          </Button>
        </div>
      </Container>
    </>
  );
}
export default Poll;
