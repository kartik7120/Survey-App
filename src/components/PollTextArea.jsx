import { TextField } from "@mui/material";

function PollTextArea(props) {
  return (
    <TextField
      id="description"
      label="Poll description"
      placeholder="Enter description"
      multiline
      sx={{ width: "45em", alignSelf: "flex-start" }}
      inputProps={{ maxLength: 500 }}
      name="description"
      value={props.formState.description}
      onChange={props.handleChangeTitle}
      type={"text"}
    />
  );
}
export default PollTextArea;
