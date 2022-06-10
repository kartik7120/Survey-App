import { Button, Container, Typography } from "@mui/material";

function ErrorPage(props) {
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
      <Typography variant="h1" component="div" gutterBottom textAlign="center">
        404
      </Typography>

      <div className="error-page-background">
        <img src="/images/dribbble_1.gif" alt="" />
      </div>
      <Typography variant="h2" component="p" gutterBottom textAlign="center">
        Look like you're lost
      </Typography>
      <Typography variant="h4" component="p" gutterBottom textAlign="center">
        the page you are looking for not avaible!
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Go Home
      </Button>
    </Container>
  );
}
export default ErrorPage;
