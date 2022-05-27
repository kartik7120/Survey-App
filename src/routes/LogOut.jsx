import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
        setSignInState(false);
      })
      .catch((err) => console.log("Some errored while logging out", err));
    navigate("../home", { replace: true });
  }
  return (
    <div className="logout-flexbox">
      <Box
        component="span"
        sx={{ p: 2, border: "1px dashed grey" }}
        className="logout-box"
      >
        <Typography variant="h3" component="div" gutterBottom>
          Username
          {props.username}
        </Typography>

        <Button variant="contained" color="error" onClick={handleClick}>
          LogOut
        </Button>
      </Box>
    </div>
  );
}
export default LogOut;
