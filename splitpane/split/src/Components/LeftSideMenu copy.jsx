import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../Navbar";
import SplitPane from "react-split-pane";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import Controlvertical from "../Control/Controlvertical";
import ControlVertical1 from "../Control/ControlVertical1";
import ControlHorizontal1 from "../Control/ControlHorizontal1";
import ControlHorizontal2 from "../Control/ControlHorizontal2";
import { Link, Outlet } from "react-router-dom";
import Button from "../Control/menu/Button";
import Table from "../Control/menu/Table";
import Website from "../Control/menu/Website";
import Contacts from "../Control/menu/Contacts";
import Apidata from "../Apidata";
import {
  Sidebar,
  InputItem,
  DropdownItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";
import menudata from "../Apidata";
import styled from "styled-components";
import "./LeftSideMenu.css";

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

const LeftSideMenu = () => {
  const [open, setOpen] = useState("false");
  const [active, setActive] = useState("");
  const [header, setHeader] = useState([]);
  let [steps, setActiveSteps] = useState([]);
  const [stage, setStage] = useState("");
  let [selectedid, setSelectedId] = useState("");
  const data = React.useContext(userContext);

  if (active == "2") {
    steps = ["Data Processing", "Pre-built Analytics", "Process Monitor"];
  } else if (active == "3") {
    steps = [
      "Process Reporting Entities",
      "Status Monitor",
      "Prebuilt Analytics",
      "Pyramid Core Engine (self Service)",
    ];
  } else if (active == "4") {
    steps = [
      "Reporting Status ",
      "Data Quality Monitor",
      "Pyramid Prebuilt Analytics",
    ];
  } else if (active == "6") {
    steps = [
      "Process Reporting Entities",
      "Status Monitor",
      "Prebuilt Analytics",
      "Pyramid Core Engine (self Service)",
    ];
  } else if (active == "7") {
    steps = [
      "Reporting Status ",
      "Data Quality Monitor",
      "Pyramid Prebuilt Analytics",
    ];
  } else if (active !== "") {
    steps = ["admin"];
  } else {
    steps = [];
  }

  // let updateHandler = (event) => {
  //   event.preventDefault();
  //   setActive(event.target.name);
  //   console.log(active);
  // };
  let openHandler = (id) => {
    setSelectedId(id);
    open == "true" ? setOpen("false") : setOpen("true");
  };

  return (
    <>
      <div className="steps-Header">
        <ul className="steps">
          {steps.map((step, index) => {
            return (
              <>
                <li className="steps-list">
                  {/* <input
                    onClick={() => setStage(`${index + 1}`)}
                    type="submit"
                    value={step}
                  /> */}

                  <Link onClick={() => setStage(`${index + 1}`)}>
                    {" "}
                    <h6 className="active">{index + 1}</h6>
                    {step}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <SplitPane split="vertical" minSize={200} defaultSize={200} maxSize={400}>
        {data.value1 == "true" ? (
          <div className="">
            {menudata.map((ele, index) => {
              console.log(active);
              return (
                <div className="dropdown">
                  <DropDownContainer>
                    <div className="sideheader">
                      {ele.Parent === "" ? (
                        <Link
                          className=" ml-2 anchor"
                          id={index + 1}
                          onClick={(e) => openHandler(e.target.id)}
                        >
                          <i className={`fas fa-${ele.IconId} mr-3 mt-2`}></i>
                          {ele.Child}
                          {open === "false" ? (
                            <div className="arrow">
                              {" "}
                              <i className={`fas fa-angle-down `}></i>
                            </div>
                          ) : (
                            <div className="arrow">
                              <i className={`fas fa-angle-up `}></i>
                            </div>
                          )}
                        </Link>
                      ) : null}
                    </div>
                    <div>
                      {open === "true" ? (
                        <div className="sidelist ml-5">
                          {ele.Parent !== "" ? (
                            <div>
                              {index + 1 > selectedid &&
                              index + 1 < selectedid + 1 ? (
                                // {index + 1 == selectedid ? (
                                <Link
                                  onClick={() => {
                                    setActive(index + 1);
                                  }}
                                >
                                  <i
                                    className={`fas fa-${ele.IconId} mr-3 mt-2`}
                                  ></i>

                                  {ele.Child}
                                </Link>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </DropDownContainer>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}

        <SplitPane
          split="vertical"
          minSize={200}
          defaultSize={800}
          maxSize={1000}
        >
          {stage === "1" ? (
            <Button />
          ) : stage === "2" ? (
            <Table />
          ) : (
            <ControlHorizontal1 />
          )}
          {data.value2 == "true" ? (
            <>
              {stage === "1" ? (
                <Table />
              ) : stage === "2" ? (
                <Website />
              ) : stage !== "" ? (
                <ControlHorizontal1 />
              ) : (
                <div></div>
              )}
            </>
          ) : null}
        </SplitPane>
        <SplitPane
          split="vertical"
          minSize={100}
          defaultSize={200}
          maxSize={300}
        ></SplitPane>
      </SplitPane>
    </>
  );
};

export default LeftSideMenu;
