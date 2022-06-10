import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
function ErrorPage(props) {
  let navigate = useNavigate();
  function handleClick(e) {
    navigate("../home", { replace: true });
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        textAlign="center"
        sx={{ margin: "0" }}
      >
        404
      </Typography>

      <div className="error-page-background">
        <img src="/images/dribbble_1.gif" alt="" />
      </div>
      <Typography variant="h3" component="p" gutterBottom textAlign="center">
        Look like you're lost
      </Typography>
      <Typography variant="h4" component="p" gutterBottom textAlign="center">
        the page you are looking for not available!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleClick}
      >
        Go Home
      </Button>
    </Container>
  );
}
export default ErrorPage;
