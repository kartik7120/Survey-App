import React from "react";
import { signInContext } from "../components/Navbar";

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
      <h1>I am the profile route</h1>
    </>
  );
}
export default Profile;
