import { Container, Typography, Divider, Fab } from "@mui/material";
import { useNavigate } from "react-router";
import React from "react";
import "../homeStyle.css";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
function Home(props) {
  let navigate = useNavigate();
  const [state, setState] = React.useState(null);

  React.useEffect(function () {
    fetch("poll/allPolls/details")
      .then((jsonData) => jsonData.json())
      .then((data) => setState(data))
      .catch((error) =>
        console.log(
          "Error occured while fetching data from the poll/allPolls/details = ",
          error
        )
      );
  }, []);

  function handleClick(e) {
    navigate("../Allpolls");
  }
  return (
    <>
      {state ? (
        <Container maxWidth="xl">
          <div className="upperFlexBox">
            <div className="upperText">
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                sx={{ fontSize: "4em" }}
              >
                Create Amazing Polls in Seconds
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontWeight: "0.5em",
                  fontSize: "2em",
                }}
                gutterBottom
              >
                Create a poll, Share with friends or Embed on your site.
                Unlimited Polls - Unlimited Votes - Limitless Customisation -
                ABSOLUTELY FREE!
              </Typography>
            </div>
            <div className="homeBody">
              <img src="/images/vote4.jpg" className="homeImg" alt="" />
            </div>
          </div>
          <Divider variant="middle" component="hr" />
          <Container
            maxWidth="xl"
            sx={{
              margin: "3% auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              textAlign="center"
              sx={{ fontSize: "2.5em" }}
            >
              Explore Polls Created by Awesome Pollsters Like YOU
            </Typography>
            <Fab variant="extended" color="primary" onClick={handleClick}>
              <AutoFixHighIcon sx={{ mr: 1, margin: "0 auto" }} />
              Explore
            </Fab>
          </Container>
          <Divider variant="middle" component="hr" />
          <Container
            maxWidth="xl"
            sx={{
              margin: "2%",
            }}
            className="PollStates"
          >
            {state ? (
              <>
                <div style={{ fontSize: "4em" }}>
                  {state.noOfPolls}
                  <span className="pollDetails"> Total Polls</span>
                </div>
                <div style={{ fontSize: "4em" }}>
                  {state.noOfUsers}
                  <span className="pollDetails">Total Users</span>
                </div>
                <div style={{ fontSize: "4em" }}>
                  {state.totalVotes}
                  <span className="pollDetails">Total Votes</span>
                </div>
              </>
            ) : (
              ""
            )}
          </Container>
          <Divider variant="middle" component="hr" />
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
export default Home;
