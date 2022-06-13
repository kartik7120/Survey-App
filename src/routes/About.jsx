import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
function About(props) {
  return (
    <Container maxWidth="lg" sx={{ margin: "3em auto" }}>
      <Typography variant="h3" component="h1" textAlign="center">
        About
      </Typography>
      <Typography variant="h6" component="p">
        <p>
          Hello! I am Kartik Shukla, a college student who likes working with
          new liberies and frameworks to build web apps , I got this
          <Typography variant="h6" component="a" sx={{ padding: "0.2em" }}>
            <Link
              href="https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Voting-App.md"
              underline="hover"
              color="secondary"
            >
              idea
            </Link>
          </Typography>
          of the app from this
          <Typography variant="h6" component="a" sx={{ padding: "0.2em" }}>
            <Link
              href="https://github.com/florinpop17/app-ideas"
              underline="hover"
              color="secondary"
            >
              GitHub Repository.
            </Link>
          </Typography>
        </p>
      </Typography>
      <Typography variant="h3" component="h2" textAlign="center">
        Tech Stack used for creating this web app
      </Typography>
      <Box>
        
      </Box>
    </Container>
  );
}
export default About;
