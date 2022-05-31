import "../allPolls.css";
import { Container } from "@mui/material";
import React from "react";
import SinglePoll from "../components/SinglePoll";
import { Outlet } from "react-router";
function AllPolls(props) {
  const [state, setState] = React.useState(null);

  React.useEffect(function () {
    fetch("/poll/allPolls")
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log("Data from the allPolls route", data);
        setState(function (oldState) {
          return data;
        });
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <div className="poll-wrapper">
        {state
          ? state.map((pollData, index) => {
              return (
                <SinglePoll
                  id={pollData._id}
                  key={index * 10}
                  title={pollData.title}
                  description={pollData.description}
                  votes={pollData.votes}
                  options={pollData.options}
                />
              );
            })
          : "Please wait...."}
        <Outlet />
      </div>
    </Container>
  );
}

export default AllPolls;
