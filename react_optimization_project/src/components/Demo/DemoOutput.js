import React, { memo } from "react";

const DemoOutput = (props) => {
  console.log("demoOutput RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};
export default memo(DemoOutput);
