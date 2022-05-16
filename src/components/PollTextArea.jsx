import { TextField } from "@mui/material";

function PollTextArea(props) {
  //   return <textarea name="" id="" cols="10" rows="10" ></textarea>;
  return (
    <TextField
      id="outlined-textarea"
      label="Poll description"
      placeholder="Enter description"
      multiline
      sx={{ width: "45em", alignSelf: "flex-start" }}
    />
  );
}
export default PollTextArea;
