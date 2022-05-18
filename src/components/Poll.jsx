import { Button, Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
import React from "react";
import { useNavigate } from "react-router";
function Poll(props) {
  const [state, setState] = React.useState(2);
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
  });
  // const [optionState, setOptionState] = React.useState({});

  function handleChangeTitle(e) {
    const titleFeild = e.target;
    console.log(titleFeild.id);
    const titleFeildValue = titleFeild.value;
    if (titleFeild.id === "pollTitle")
      setFormState(function (oldFormState) {
        return {
          ...oldFormState,
          title: titleFeildValue,
        };
      });
    else if (titleFeild.id === "description") {
      setFormState(function (oldFormState) {
        return {
          ...oldFormState,
          description: titleFeildValue,
        };
      });
    }
  }

  function handleSubmit(e) {
    let navigate = useNavigate();
    
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
        <form
          action="http://localhost:9000/poll/create"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="poll--create">
            <Title
              formState={formState}
              handleChangeTitle={handleChangeTitle}
            />
            <Divider orientation="vertical" flexItem>
              <hr />
            </Divider>
            <PollTextArea
              handleChangeTitle={handleChangeTitle}
              formState={formState}
            />
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
