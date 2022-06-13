import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  SiExpress,
  SiMongodb,
  SiReactrouter,
  SiJsonwebtokens,
  SiFramer,
  SiMaterialui,
} from "react-icons/si";
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
          of the app from the
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          flexWrap: "wrap",
        }}
      >
        <IconContext.Provider value={{ size: "6em", color: "#4DB33D" }}>
          <div>
            <SiMongodb />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "grey" }}>
          <div>
            <SiExpress />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "cyan" }}>
          <div>
            <FaReact />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "#44883e" }}>
          <div>
            <FaNodeJs />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "red" }}>
          <div>
            <SiReactrouter />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em" }}>
          <div>
            <SiJsonwebtokens />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "#0288d1" }}>
          <div>
            <SiMaterialui />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "6em", color: "black" }}>
          <div>
            <SiFramer />
          </div>
        </IconContext.Provider>
      </Box>
      <Typography component="p" variant="h6" textAlign="center">
        If you find a bug or want to add a feature to this project you can
        <Typography variant="h6" component="a" sx={{ padding: "0.2em" }}>
          <Link href="https://github.com/kartik7120/Survey-App" color="secondary">fork</Link>
        </Typography>
        the project from here and start contributing !
      </Typography>
    </Container>
  );
}
export default About;
