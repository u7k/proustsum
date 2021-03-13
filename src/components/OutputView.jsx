import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextArea from "@material-ui/core/TextareaAutosize";
import SaveIcon from "@material-ui/icons/SaveRounded";
import Button from "@material-ui/core/Button";
import { Zoom } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

export function SaveStepIcon() {
  return (
    <div className="step-icon-wrap">
      <SaveIcon className="step-icon" />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#4a47a3",
    fontWeight: "500",
    color: "white",
    width: "300px",
    height: "60px",
    margin: "30px auto",
    "&:hover": {
      backgroundColor: "#7868e6",
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
    },
  },
}));

const OutputView = (props) => {
  const classes = useStyles();

  function copyText() {
    navigator.clipboard.writeText(props.generatedText);

    props.animateCheckmark(true);

    setInterval(() => {
      props.animateCheckmark(false);
    }, 1000);
  }

  return (
    <>
      <TextArea
        rows={2}
        rowsMax={2}
        aria-label="empty textarea"
        placeholder="Empty"
        value={props.generatedText}
        className="textbox"
      />
      <Button className={classes.button} onClick={copyText}>
        {props.showCheckmark ? (
          <Zoom
            in={props.showCheckmark}
            style={{ transitionDelay: props.showCheckmark ? "40ms" : "0ms" }}
          >
            <DoneIcon />
          </Zoom>
        ) : (
          <p style={{ textAlign: "center" }}>COPY</p>
        )}
      </Button>
    </>
  );
};

export default OutputView;
