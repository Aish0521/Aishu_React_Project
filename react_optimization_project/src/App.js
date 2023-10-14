import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const handleClick = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);
  const handleAllowToggle = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is a para</p>} */}
      <DemoOutput show={showParagraph} />
      {/* <DemoOutput show={false} /> */}
      <Button onClick={handleAllowToggle}>Allow Toggle</Button>
      <Button onClick={handleClick}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
