import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// import {} from "@mui/icons-material";

function Option(props) {
  return (
    <>
      <div className="option-flex-box">
        <TextField
          helperText=""
          id="demo-helper-text-aligned-no-helper"
          label={`Option ${props.optionNo}`}
          sx={{ marginBottom: "0.5em", width: "30em", alignSelf: "flex-start" }}
          className={"option-text-feild"}
        ></TextField>
        {props.optionNo > 2 ? (
          <IconButton
            aria-label="delete"
            size="large"
            sx={{ display: "inline" }}
            onClick={props.deleteOption} // function for deleting an option
          >
            <DeleteOutlinedIcon sx={{ display: "inline" }} />
          </IconButton>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Option;
