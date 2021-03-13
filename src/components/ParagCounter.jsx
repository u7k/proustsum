import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#4a47a3",
    color: "white",
    "&:hover": {
      backgroundColor: "#7868e6",
    },
  },
  inactiveButton: {
    borderColor: "#4a47a3",
    "&:disabled": {
      borderColor: "#4a47a3",
      width: "3.5rem",
      fontWeight: "600",
      color: "#440a67",
    },
  },
}));

const ParagCounter = ({ paragCount, setParagCount }) => {
  const classes = useStyles();

  function reduceParags() {
    const oldValue = paragCount;

    if (oldValue > 1) {
      setParagCount(oldValue - 1);
    }
  }

  function increaseParags() {
    const oldValue = paragCount;

    if (oldValue < 10) {
      setParagCount(oldValue + 1);
    }
  }

  return (
    <div>
      <ButtonGroup
        disableElevation
        variant="contained"
        color="primary"
        className="btn-group"
      >
        <Button name="reduce" className={classes.button} onClick={reduceParags}>
          <RemoveIcon />
        </Button>

        <Button disabled variant="outlined" className={classes.inactiveButton}>
          {paragCount}
        </Button>

        <Button
          name="increase"
          className={classes.button}
          onClick={increaseParags}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>

      <h2 className="input-type-txt">paragraphs</h2>
    </div>
  );
};

export default ParagCounter;
