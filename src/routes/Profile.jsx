import React from "react";
import { signInContext } from "../components/Navbar";
import { Avatar, Container } from "@mui/material";
import { Divider } from "@mui/material";
import "../profile.css";

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
          setUserDataState(function () {
            return {
              _id: body._id,
              polls: body.polls,
              username: body.username,
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
      <Container maxWidth="xl">
        <div className="profileFlexBox">
          <div>
            <div>
              <Avatar {...stringAvatar(`${userDataState.username}`)} />
            </div>
            <Divider />
            <h1>I am the profile route</h1>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
export default Profile;
// Total number of polls
// Total number of votes on those polls
// View all polls made by a particular user
