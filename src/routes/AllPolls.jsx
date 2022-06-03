import "../allPolls.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";
import SinglePoll from "../components/SinglePoll";
import { Outlet } from "react-router";
import { Skeleton } from "@mui/material";

let dummyArray = [1, 2, 3, 4, 5];

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
          : dummyArray.map((ele) => (
              <Card
                sx={{
                  margin: "1em",
                  boxShadow: "3px 3px 14px -9px rgba(0,0,0,0.75)",
                  borderRadius: "2em",
                  width: "50%",
                }}
              >
                <CardContent sx={{ borderRadius: "2em" }}>
                  <div className="poll">
                    <Skeleton
                      width="20em"
                      variant="rectangle"
                      animation="wave"
                    />
                    <Typography variant="h1">
                      <Skeleton varaint="rectangle" animation="wave" />
                    </Typography>
                    <Typography variant="p">
                      <Skeleton varaint="rectangle" animation="wave" />
                    </Typography>
                    <Button variant="contained" color="primary">
                      <Skeleton varaint="rectangle" animation="wave" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        <Outlet />
        <Pagination count={10} color="secondary" sx={{ margin: "5% auto" }} />
      </div>
      {/* <Pagination count={10} color="secondary" /> */}
    </Container>
  );
}

export default AllPolls;
