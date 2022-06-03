import { Container, Typography } from "@mui/material";
import React from "react";
import "../homeStyle.css";

function Home(props) {
  return (
    <Container maxWidth="xl">
      <div className="upperFlexBox">
        <div className="upperText">
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{ fontSize: "4em" }}
          >
            Create Amazing Polls in Seconds
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "0.5em",
              fontSize: "2em",
            }}
            gutterBottom
          >
            Create a poll, Share with friends or Embed on your site. Unlimited
            Polls - Unlimited Votes - Limitless Customisation - ABSOLUTELY FREE!
          </Typography>
        </div>
        <div className="homeBody">
          <img src="/images/vote4.jpg" className="homeImg" alt="" />
        </div>
      </div>
    </Container>
  );
}
export default Home;
