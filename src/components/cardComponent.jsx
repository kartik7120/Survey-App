import { CardContent, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
function UserDisplay(props) {
  return (
    <Card>
      <CardContent>
        <Typography component="span" style={{ fontFamily: "Poppins" }}>
          {props.title}
        </Typography>
        <Divider
          component="div"
          orientation="horizontal"
          style={{ backgroundColor: `${props.color}`, height: "0.09em" }}
          flexItem
        ></Divider>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          style={{ margin: "15%" }}
          textAlign="center"
        >
          {props.value}
        </Typography>
        <Typography textAlign="center"> {props.children}</Typography>
      </CardContent>
    </Card>
  );
}
export default UserDisplay;
