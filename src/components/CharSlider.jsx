import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { maxChars } from "../proustsum-data";

const useStyles = makeStyles((theme) => ({
  numField: {
    width: "90%",
    maxWidth: "400px",
    height: "55px",
  },

  createButton: {
    backgroundColor: "#4a47a3",
    color: "white",
    width: "90%",
    margin: "30px auto 0px auto",
    "&:hover": {
      backgroundColor: "#7868e6",
    },
  },
}));

const CharSlider = ({ charCount, setCharCount }) => {
  const classes = useStyles();

  function handleChange(event) {
    const newValue = event.target.value;
    const numbers = /^[0-9]+$/;

    if (charCount > maxChars) {
      setCharCount(NaN);
      setCharCount(maxChars);
    } else if (newValue.match(numbers)) {
      setCharCount(newValue);
    } else if (
      charCount.length === 1 &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      setCharCount(Number.NaN);
    }
  }

  return (
    <div className="slider-wrap">
      <TextField
        id="outlined-number"
        type="number"
        inputProps={{ min: 0, style: { fontWeight: "600", color: "#440a67" } }}
        InputLabelProps={{
          min: 0,
          style: {
            textAlign: "center",
            color: "white",
            marginLeft: "auto",
            display: "block",
          },
          shrink: true,
        }}
        variant="outlined"
        className={classes.numField}
        value={charCount}
        onChange={handleChange}
      />

      <h2 className="input-type-txt">bytes</h2>
    </div>
  );
};

export default CharSlider;
