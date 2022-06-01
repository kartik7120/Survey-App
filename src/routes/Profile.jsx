import React from "react";
import { signInContext } from "../components/Navbar";
import { Avatar, CardActionArea, CardContent, Container } from "@mui/material";
import { Divider } from "@mui/material";
import "../profile.css";
import { Card } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import LogOut from "./LogOut";
const profileUserContext = React.createContext("No user is logged in");

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: "8em",
      height: "8em",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Profile(props) {
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  console.log("signInState from profile route = ", signInState);
  const [userDataState, setUserDataState] = React.useState(null);
  React.useEffect(
    function () {
      if (signInState !== false) {
        fetch(`/users/${signInState._id}`)
          .then((jsonData) => jsonData.json())
          .then((data) => {
            console.log("Data from the /users/:id route", data);
            const body = JSON.parse(data);
            let totalVotes = 0;
            body.polls.map((ele) => {
              return ele.votes.map((vote) => {
                return (totalVotes += vote);
              });
            });
            setUserDataState(function () {
              return {
                _id: body._id,
                polls: body.polls,
                username: body.username,
                pollCount: body.polls.length,
                totalVotes: totalVotes,
              };
            });
          })
          .catch((err) =>
            console.log(
              "Some error occured while fetching data from /users/:id route",
              err
            )
          );
      } else navigate("../Signup");
    },
    [signInState._id, navigate, signInState]
  );

  return (
    <>
      {userDataState ? (
        <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
          <Card
            style={{
              borderRadius: "5%",
            }}
          >
            <CardContent>
              <div className="profileFlexBox">
                <div className="upperProfilePart">
                  <div>
                    <Avatar {...stringAvatar(`${userDataState.username}`)} />
                  </div>
                  <h1>{userDataState.username}</h1>
                </div>
                <Divider
                  variant="fullWidth"
                  orientation="horizontal"
                  component="hr"
                  flexItem
                />
                <div className="LowerProfilePart">
                  <div>Total Number of votes = {userDataState.totalVotes}</div>
                  <Divider
                    variant="fullWidth"
                    orientation="vertical"
                    component="hr"
                    flexItem
                  />
                  <div>Total number of polls = {userDataState.pollCount}</div>
                  <Divider
                    variant="fullWidth"
                    orientation="vertical"
                    component="hr"
                    flexItem
                  />
                  <Link
                    to="polls"
                    style={{ textDecoration: "none", all: "unset" }}
                  >
                    <CardActionArea>
                      <div>View My Polls</div>
                    </CardActionArea>
                  </Link>
                </div>
              </div>
            <LogOut />
            </CardContent>
          </Card>
          <profileUserContext.Provider value={signInObject}>
            <Outlet />
          </profileUserContext.Provider>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
export default Profile;
export { profileUserContext };
// Total number of polls
// Total number of votes on those polls
// View all polls made by a particular user
