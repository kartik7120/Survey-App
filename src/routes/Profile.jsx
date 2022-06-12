import React from "react";
import { signInContext } from "../components/Navbar";
import { Avatar, CardActionArea, CardContent, Container } from "@mui/material";
import { Divider } from "@mui/material";
import "../profile.css";
import { Card } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import LogOut from "./LogOut";
import UserDisplay from "../components/cardComponent";
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
      width: "5em",
      height: "5em",
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
      if (signInState) {
        const fetchConfig = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "o-auth-token": localStorage.getItem("userToken"),
          },
        };
        fetch(`/users/user`, fetchConfig)
          .then((jsonData) => {
            if (jsonData.status === 404) navigate("../Signin");
            return jsonData.json();
          })
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
        <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
          <Card
            style={{
              borderRadius: "5%",
            }}
          >
            <CardContent>
              <div className="profileFlexBox">
                <div className="upperProfilePart">
                  <div>
                    <Avatar
                      {...stringAvatar(`${userDataState.username}`)}
                      style={{ fontSize: "1.5em" }}
                    />
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
                  <UserDisplay
                    title="Number of votes"
                    value={userDataState.totalVotes}
                    color="yellow"
                  />
                  <Divider
                    variant="fullWidth"
                    orientation="vertical"
                    component="hr"
                    flexItem
                  />
                  <UserDisplay
                    title="Number of polls"
                    color="red"
                    value={userDataState.pollCount}
                  >
                    <Link
                      to="polls"
                      style={{ textDecoration: "none", all: "unset" }}
                    >
                      <CardActionArea>
                        <div>View My Polls</div>
                      </CardActionArea>
                    </Link>
                  </UserDisplay>
                </div>
                <Divider
                  variant="fullWidth"
                  orientation="horizontal"
                  component="hr"
                  flexItem
                  style={{ margin: "2%" }}
                />
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
