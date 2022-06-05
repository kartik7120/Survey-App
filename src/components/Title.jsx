import { TextField } from "@mui/material";

function Title(props) {
  return (
    <TextField
      fullWidth
      type={"text"}
      sx={{ width: "100%", fontSize: "1em" }}
      id={"pollTitle"}
      label={"Enter poll title"}
      required
      value={props.formState.title}
      onChange={props.handleChangeTitle}
      inputProps={{ maxLength: 200 }}
      multiline
      name="title"
    />
  );
}
export default Title;
