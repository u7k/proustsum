import "./App.css";
import portrait from "./marcel.jpg";
import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import BookIcon from "@material-ui/icons/LibraryBooksRounded";
import Grid from "@material-ui/core/Grid";

import { initialText } from "./proustsum-data";
import GenerateView, { InputStepIcon } from "./components/GenerateView";
import OutputView, { SaveStepIcon } from "./components/OutputView";

function App() {
  const [generatedText, setGeneratedText] = useState(initialText);
  const [showCheckmark, animateCheckmark] = useState(false);

  return (
    <Grid container spacing={0} align="center" justify="center">
      <div className="content-wrap">
        <div className="header-wrap">
          <div className="title-wrap">
            <p>
              <h1>
                <BookIcon
                  fontSize="large"
                  color="#1e212d"
                  className="book-icon"
                />{" "}
                Proustsum
              </h1>
            </p>
            <p>
              <h2>Placeholder Text Generator</h2>
            </p>
          </div>
          <img src={portrait} alt="" />
        </div>

        <Stepper
          orientation={"vertical"}
          style={{ backgroundColor: "transparent" }}
        >
          {/* INPUTS */}
          <Step expanded={true} active={true}>
            <StepLabel
              StepIconComponent={InputStepIcon}
              key={0}
              className="step-lbl"
            >
              <span className="step-lbl-text">Choose Length</span>
            </StepLabel>

            <StepContent>
              <GenerateView setGeneratedText={setGeneratedText} />
            </StepContent>
          </Step>

          {/* OUTPUT */}
          <Step expanded={true} active={true}>
            <StepLabel
              StepIconComponent={SaveStepIcon}
              key={1}
              className="step-lbl"
            >
              <span className="step-lbl-text">Copy Your Text</span>
            </StepLabel>

            <StepContent>
              <OutputView
                generatedText={generatedText}
                showCheckmark={showCheckmark}
                animateCheckmark={animateCheckmark}
              />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </Grid>
  );
}

export default App;
