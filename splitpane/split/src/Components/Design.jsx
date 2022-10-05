import React, { useState } from "react";
import SplitPane from "react-split-pane";

let Design = () => {
  return (
    <div>
      <SplitPane split="vertical" minSize={200} defaultSize={200} maxSize={400}>
        <SplitPane
          split="horizontal"
          minSize={100}
          defaultSize={200}
          maxSize={300}
        ></SplitPane>
      </SplitPane>
    </div>
  );
};
export default Design;
