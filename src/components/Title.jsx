import { TextField } from "@mui/material";

function Title(props) {
  return (
    <TextField
      fullWidth
      type={"text"}
      sx={{ width: "45em", fontSize: "1em" }}
      id={"pollTitle"}
      label={"Enter poll title"}
      required
      value={props.formState.title}
      onChange={props.handleChangeTitle}
    />
  );
}
export default Title;
