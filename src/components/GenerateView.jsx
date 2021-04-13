import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import PenIcon from "@material-ui/icons/CreateRounded";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// RADIO BUTTONS
import ParagCounter from "./ParagCounter";
import CharSlider from "./CharSlider";
import Button from "@material-ui/core/Button";
import { allText, maxChars, paragraphs } from "../proustsum-data";

export function InputStepIcon() {
  return (
    <div className="step-icon-wrap">
      <PenIcon className="step-icon" />
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const GenerateView = (props) => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = React.useState(0);
  const [charCount, setCharCount] = useState(240);
  const [paragCount, setParagCount] = useState(3);

  function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const tabValueChanged = (event, newValue) => {
    setTabIndex(newValue);
  };

  function updateText() {
    const newProustsum = createProustsum();
    props.setGeneratedText(newProustsum);
  }

  function createProustsum() {
    if (tabIndex === 1) {
      return handleParags();
    } else {
      return handleChars();
    }
  }

  function handleChars() {
    if (charCount > maxChars) {
      setCharCount(maxChars);
    }
    const newP = allText.substring(0, charCount);
    return newP;
  }

  function handleParags() {
    var newP = ``;

    for (var i = 0; i < paragCount; i++) {
      if (i < paragraphs.length) {
        newP += paragraphs[i];
        if (i !== paragCount - 1) {
          newP += "\n\n";
        }
      } else {
        newP += paragraphs[Math.floor(Math.random() * paragraphs.length)];
        if (i !== paragCount - 1) {
          newP += "\n\n";
        }
      }
    } //: LOOP
    return newP;
  }

  return (
    <div>
      <div className="tabs-wrap">
        <AppBar position="static" className="tab-bar">
          <Tabs
            value={tabIndex}
            onChange={tabValueChanged}
            className="tabs-row"
          >
            <Tab label="Character Count" {...tabProps(0)} />
            <Tab label="Paragraph Count" {...tabProps(1)} />
          </Tabs>
        </AppBar>

        <div className="tabs-content-wrap">
          <TabPanel value={tabIndex} index={0}>
            <CharSlider charCount={charCount} setCharCount={setCharCount} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <ParagCounter
              paragCount={paragCount}
              setParagCount={setParagCount}
            />
          </TabPanel>
        </div>
      </div>

      <Button className={classes.button} onClick={updateText}>
        GENERATE PROUSTSUM
      </Button>
    </div>
  );
};

export default GenerateView;
