import React from "react";
import signInContext from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function UserPolls(props) {
  let navigate = useNavigate();
  let signInObject = React.useContext(signInContext);
  console.log("signInObject in userPolls route = ", signInObject);
  const signInState = signInObject.signInState;

  React.useEffect(function () {
    if (signInState.isAuthenticated !== false) {
      fetch(`/users/${signInState._id}`)
        .then((jsonData) => jsonData.json())
        .then((data) => console.log("Data recieved from the /users/:id", data))
        .catch((err) =>
          console.log("Error occured while fetching data from /users/:id", err)
        );
    } else navigate("../Signup");
  });
  return <h1>All the user polls</h1>;
}
export default UserPolls;
