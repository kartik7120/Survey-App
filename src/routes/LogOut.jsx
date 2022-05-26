import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import "../logout.css";

function LogOut(props) {
  let navigate = useNavigate();

  return (
    <div className="logout-flexbox">
      <Box
        component="span"
        sx={{ p: 2, border: "1px dashed grey" }}
        className="logout-box"
      >
        <Typography variant="h3" component="div" gutterBottom>
          Username
          {props.username}
        </Typography>

        <Button variant="contained" color="error">
          LogOut
        </Button>
      </Box>
    </div>
  );
}
export default LogOut;
