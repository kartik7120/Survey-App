import { Button, Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
import React from "react";

function Poll(props) {
  const [state, setState] = React.useState(2);
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
    options: [],
  });

  function handleChangeTitle(e) {
    const titleFeild = e.target;
    const titleFeildValue = titleFeild.value;
    setFormState(function (oldFormState) {
      return {
        ...oldFormState,
        title: titleFeildValue,
      };
    });
  }

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
        <form action="/poll/create" method="post">
          <div className="poll--create">
            <Title
              formState={formState}
              handleChangeTitle={handleChangeTitle}
            />
            <Divider orientation="vertical" flexItem>
              <hr />
            </Divider>
            <PollTextArea />
            <Divider orientation="vertical" flexItem>
              <hr />
            </Divider>
            <OptionsColumn optionCount={state} deleteOption={deleteOption} />
            <Button variant="contained" color="warning" onClick={handleClick}>
              Add Option
            </Button>
            <Button
              variant="contained"
              sx={{ alignSelf: "flex-end" }}
              type="submit"
            >
              Create poll
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
export default Poll;
