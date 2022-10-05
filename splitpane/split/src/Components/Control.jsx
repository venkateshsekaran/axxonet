import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import SplitPane from "react-split-pane";
import Controlvertical from "../Control/Controlvertical";
import ControlVertical1 from "../Control/ControlVertical1";
import ControlHorizontal1 from "../Control/ControlHorizontal1";
import ControlHorizontal2 from "../Control/ControlHorizontal2";
import "./Control.css";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const steps = ["Stage1", "Stage2", "Stage3", "Stage4"];

const Control = () => {
  return (
    <>
      {/* <div className="stages">
        <ul className=" stages-menu ">
          {steps.map((step, index) => {
            return (
              <>
                <hr className="new1" />
                <li>
                  <Link to={`stage${index + 1}`}>{step}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </div> */}

      <Outlet />
    </>
  );
};

export default Control;
