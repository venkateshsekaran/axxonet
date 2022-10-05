import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import Controlvertical from "../Controlvertical";
import ControlVertical1 from "../ControlVertical1";
import "../menu/Button.css";
import { Link } from "react-router-dom";
import Trail1 from "./Components/Trail1";
import Trail2 from "./Components/Trail2";
import Trail3 from "./Components/Trail3";

let Button = ({ data }) => {
  const options = ["Chart1", "Chart2", "Chart3", "Chart4"];
  let [value, setValue] = useState("1");

  return (
    <div>
      <div className="container margin ">
        <div className="row">
          <div className="col-md-12 d-block  justify-content-flex-start align-items-center">
            {" "}
            {options.map((option, index) => {
              return (
                <Link
                  href="#"
                  className={
                    index + 1 == value ? " tab-header active-tab" : "tab-header"
                  }
                  onClick={() => setValue(index + 1)}
                >
                  {option}
                </Link>
              );
            })}
          </div>

          {value == "1" ? (
            <Trail1 />
          ) : value == "2" ? (
            <Trail2 />
          ) : value == "3" ? (
            <Trail3 />
          ) : (
            <Trail3 />
          )}
        </div>
      </div>
    </div>
  );
};
export default Button;
