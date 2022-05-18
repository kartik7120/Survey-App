import { TextField } from "@mui/material";

function PollTextArea(props) {
  //   return <textarea name="" id="" cols="10" rows="10" ></textarea>;
  return (
    <TextField
      id="description"
      label="Poll description"
      placeholder="Enter description"
      multiline
      // onChange={props.handleChangeTitle}
      // value={props.formState.description}
      sx={{ width: "45em", alignSelf: "flex-start" }}
      inputProps={{ maxLength: 500 }}
      name="description"
    />
  );
}
export default PollTextArea;
