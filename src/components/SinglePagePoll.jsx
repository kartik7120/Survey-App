import { useParams } from "react-router-dom";
import { signInContext } from "./Navbar";
import { useNavigate } from "react-router";
import React from "react";
import PollChoice from "./pollChoice";
import { Button, Card, CardContent, Chip, Container } from "@mui/material";
function SinglePagePoll(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const setAlertState = signInObject.setAlertState;
  const [state, setState] = React.useState(null);
  const [voteButtonState, setvoteButtonState] = React.useState(false);

  React.useEffect(
    function () {
      console.log("I am useEffect function in SinglePollPage");
      const fetchConfig = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };
      fetch(`/poll/allPolls/${id}`, fetchConfig)
        .then((jsonData) => jsonData.json())
        .then((data) => {
          console.log("Data revieved from allPolls/:id route", data);
          const pollData = JSON.parse(data);
          setState(function (oldState) {
            return {
              ...pollData,
              targetValue: pollData.options[0],
            };
          });
        })
        .catch((err) =>
          console.log(
            "Error occured while fetching data from allPolls/:id route",
            err
          )
        );
    },
    [id]
  );

  //   const totalVotes = props.votes.reduce(
  //     (prevValue, currValue) => prevValue + currValue,
  //     0
  //   );
  function handleSubmit(e) {
    if (localStorage.getItem("userToken")) {
      e.preventDefault();
      const fetchConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "o-auth-token": localStorage.getItem("userToken"),
        },
        body: JSON.stringify(state),
      };
      fetch(`/poll/updateVotes/${state._id}`, fetchConfig)
        .then((jsonData) => {
          if (jsonData.status === 404) {
            setAlertState(function (oldState) {
              return "Session expired";
            });
            navigate("/Signin");
          }
          return jsonData.json();
        })
        .then((data) => {
          console.log("Data recieved from patch request", data);
          const objData = data;
          console.log(objData);
          setState(function (oldState) {
            return {
              ...oldState,
              _id: objData._id,
              title: objData.title,
              options: objData.options,
              votes: objData.votes,
              description: objData.description,
              flair: objData.flair,
              voteButtonState: true,
            };
          });
        })
        .catch((err) => {
          if (err === "Token is invalid") navigate("/Signin");
          console.log("Error occured while making a PATCH request", err);
        });
    } else {
      navigate("/Signup");
    }
  }

  return (
    <>
      {state ? (
        <>
          <Container
            maxWidth="xl"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Card sx={{ width: "50%", borderRadius: "3em" }}>
              <CardContent>
                <div className="poll">
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <h1>{state.title}</h1>
                    <p>{state.description}</p>
                    <PollChoice
                      options={state.options}
                      votes={state.votes}
                      setState={setState}
                      voteButtonState={state.voteButtonState}
                      userVoted={state.userVoted}
                      setvoteButtonState={setvoteButtonState}
                      voteButtonState2={voteButtonState}
                    />
                  </form>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {state.voteButtonState || voteButtonState ? (
                      ""
                    ) : (
                      <Button
                        variant="contained"
                        color="warning"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Vote
                      </Button>
                    )}
                    {state.flair ? (
                      <Chip color="secondary" label={state.flair} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default SinglePagePoll;
