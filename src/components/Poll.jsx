import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import PollTextArea from "./PollTextArea";
import Title from "./Title";
import OptionsColumn from "./OptionColumn";
import React from "react";
import { Navigate, useNavigate } from "react-router";
import { signInContext } from "./Navbar";

function Poll(props) {
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  const [state, setState] = React.useState(2);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
    options: {},
  });

  const [open, setOpen] = React.useState(false);
  const [flair, setFlair] = React.useState("");

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
    if (signInState !== false) {
      e.preventDefault();
      const body = formState;
      body.flair = flair;
      const fetchConfig = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(body),
      };
      fetch("/poll/create", fetchConfig)
        .then((jsonData) => jsonData.json())
        .then((data) => {
          navigate(`/poll/${data}`, { replace: true });
        })
        .catch((err) =>
          console.log(
            "Error occured while fetching POST request to the backend server",
            err
          )
        );
      setIsSubmited(true);
    } else {
      navigate("/Signup");
    }
  }
  const handleChange = (event) => {
    setFlair(event.target.value || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

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
            <div className="button-flexBox">
              <Button variant="contained" color="warning" onClick={handleClick}>
                Add Option
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
              >
                Flair
              </Button>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                  <Box
                    component="form"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-dialog-select-label">
                        Flair
                      </InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={flair}
                        onChange={handleChange}
                        input={<OutlinedInput label="Flair" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Art"}>Art</MenuItem>
                        <MenuItem value={"Business"}>Business</MenuItem>
                        <MenuItem value={"Anime"}>Anime</MenuItem>
                        <MenuItem value={"Economy"}>Economy</MenuItem>
                        <MenuItem value={"Food"}>Food</MenuItem>
                        <MenuItem value={"Education"}>Education</MenuItem>
                        <MenuItem value={"Entertainment"}>
                          Entertainment
                        </MenuItem>
                        <MenuItem value={"Games"}>Games</MenuItem>
                        <MenuItem value={"Technology"}>Technology</MenuItem>
                        <MenuItem value={"Misc"}>Misc</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
              </Dialog>

              <Button
                variant="contained"
                sx={{ alignSelf: "flex-end" }}
                type="button"
                onClick={handleSubmit}
              >
                Create poll
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
export default Poll;
