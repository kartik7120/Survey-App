import { Container } from "@mui/material";
import React from "react";
import "../homeStyle.css";
function Home(props) {
  function handleClick(e) {}
  return (
    <Container maxWidth="xl" className="homeBody">
      <div className="flex-box-home">
        <h1>Voting app</h1>
        <p>Made using React</p>
        <button type="button" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </Container>
  );
}
export default Home;
