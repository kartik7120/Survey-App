import React from "react";
import { signInContext } from "../components/Navbar";

function Profile(props) {
  const signInObject = React.useContext(signInContext);
  const signInState = signInObject.signInState;
  console.log("signInState = ", signInState);
  React.useEffect(function () {
    fetch(`/users/${signInState._id}`)
      .then((jsonData) => jsonData.json())
      .then((data) => console.log("Data from the /users/:id route", data))
      .catch((err) =>
        console.log(
          "Some error occured while fetching data from /users/:id route",
          err
        )
      );
  });
  return <h1>I am the profile route</h1>;
}
export default Profile;
