import { TextField } from "@mui/material";

function Option(props) {
  return (
    <TextField
      helperText=""
      id="demo-helper-text-aligned-no-helper"
      label="Option 1"
      sx={{ marginBottom: "0.5em", width: "30em", alignSelf: "flex-start" }}
      className={"option-text-feild"}
    />
  );
}
export default Option;
