import React from "react";
import { signInContext } from "../components/Navbar";
import { Avatar, CardActionArea, CardContent, Container } from "@mui/material";
import { Divider } from "@mui/material";
import "../profile.css";
import { Card } from "@mui/material";
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
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  console.log("signInState = ", signInState);
  const [userDataState, setUserDataState] = React.useState(null);
  React.useEffect(
    function () {
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
    },
    [signInState._id]
  );

  return (
    <>
      {userDataState ? (
        <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
          <Card>
            <CardContent>
              <div className="profileFlexBox">
                <div className="upperProfilePart">
                  <div>
                    <Avatar {...stringAvatar(`${userDataState.username}`)} />
                  </div>
                  <Divider />
                  <h1>{userDataState.username}</h1>
                </div>
                <div className="LowerProfilePart">
                  <CardActionArea>
                    <div>
                      Total Number of votes = {userDataState.totalVotes}
                    </div>
                  </CardActionArea>
                  <CardActionArea>
                    <div>Total number of polls = {userDataState.pollCount}</div>
                  </CardActionArea>
                  <CardActionArea>
                    <div>View all polls made by the user</div>
                  </CardActionArea>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
export default Profile;
// Total number of polls
// Total number of votes on those polls
// View all polls made by a particular user
