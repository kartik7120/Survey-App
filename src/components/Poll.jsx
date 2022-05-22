import { Button, Container, Divider, Typography } from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
import React from "react";
import { Navigate, useNavigate } from "react-router";
function Poll(props) {
  let navigate = useNavigate();
  const [state, setState] = React.useState(2);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
    options: {},
  });

  function handleOptionChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const optionObj = formState.options;
    const newOptionObject = {
      ...optionObj,
      [name]: value,
    };
    setFormState(function (oldFormState) {
      return {
        ...oldFormState,
        options: newOptionObject,
      };
    });
  }

  function handleChangeTitle(e) {
    const titleFeild = e.target;
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
  async function handleSubmit(e) {
    e.preventDefault();
    // const body = {
    //   title: "I am a title",
    //   description: "I am a description",
    //   options: {
    //     option1: "PSYCHO-PASS",
    //     option2: "ID invaded",
    //     option3: "Kimi no na wa",
    //   },
    // };

    const body = formState;
    const fetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(body),
    };
    //  Making the fetch request in the backend and sending JSON body
    fetch("http://localhost:9000/poll/create", fetchConfig)
      .then((jsonData) => jsonData.json())
      .then((data) => console.log(data))
      .catch((err) =>
        console.log(
          "Error occured while fetching POST request to the backend server",
          err
        )
      );
    setIsSubmited(true);
    navigate("/Allpolls", { replace: true });
  }

  function handleClick(e) {
    if (state < 6) setState((oldState) => oldState + 1);
  }

  function deleteOption(e) {
    setState((oldState) => oldState - 1);
  }

  if (isSubmited) {
    return <Navigate to="/Allpolls" replace={true} />;
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
        <form action="/poll/create" method="post" className="createPollForm">
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
            <OptionsColumn
              optionCount={state}
              deleteOption={deleteOption}
              handleOptionChange={handleOptionChange}
              formState={formState}
            />
            <Button variant="contained" color="warning" onClick={handleClick}>
              Add Option
            </Button>
            <Button
              variant="contained"
              sx={{ alignSelf: "flex-end" }}
              type="button"
              onClick={handleSubmit}
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
