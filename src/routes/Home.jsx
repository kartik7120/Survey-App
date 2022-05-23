import { Button, Container } from "@mui/material";
import React from "react";
import "../homeStyle.css";

function Home(props) {
  function handleClick(e) {}
  return (
    <Container maxWidth="xl" className="homeBody" sx={{ display: "flex" }}>
      <div className="flex-box-home">
        <h1>Voting app</h1>
        <p>Made using React</p>
        <Button variant="contained" onClick={handleClick}>
          Get Started
        </Button>
      </div>
    </Container>
  );
}
export default Home;
