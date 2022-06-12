import { Button } from "@mui/material";
import React from "react";
import { signInContext } from "../components/Navbar";
import { useNavigate } from "react-router";
import "../logout.css";

function LogOut(props) {
  let navigate = useNavigate();
  const signInObject = React.useContext(signInContext);
  const setSignInState = signInObject.setSignInState;

  function handleClick(e) {
    const fetchConfig = {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
    };
    fetch("/users/logout", fetchConfig)
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log("Data recieved from logout route", data);
        if (localStorage.getItem("userToken")) {
          localStorage.removeItem("userToken");
        }
        setSignInState(false);
      })
      .catch((err) => console.log("Some errored while logging out", err));
    navigate("../home", { replace: true });
  }
  return (
    <div className="logout-flexbox">
      <Button variant="contained" color="error" onClick={handleClick}>
        LogOut
      </Button>
    </div>
  );
}
export default LogOut;
