import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../Navbar";
import { Link, Outlet } from "react-router-dom";
import SplitPane from "react-split-pane";
import Controlvertical from "../Control/Controlvertical";
import ControlVertical1 from "../Control/ControlVertical1";
import ControlHorizontal1 from "../Control/ControlHorizontal1";
import ControlHorizontal2 from "../Control/ControlHorizontal2";
import Button from "../Control/menu/Button";
import Table from "../Control/menu/Table";
import Website from "../Control/menu/Website";
import Contacts from "../Control/menu/Contacts";
import Apidata from "../Apidata";
import menudata from "../Apidata";
import styled from "styled-components";
import "./SplitPanePage.css";
import "../App.css";
import "../Control/menu/Components/Loading";

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

const LeftSideMenu = () => {
  const [open, setOpen] = useState("false");
  const [active, setActive] = useState("2");
  const [header, setHeader] = useState([]);
  let [steps, setActiveSteps] = useState([
    "Data Processing",
    "Pre-built Analytics",
    "Process Monitor",
  ]);
  const [stage, setStage] = useState("1");
  let [selectedid, setSelectedId] = useState("");
  const data = React.useContext(userContext);

  // stepper data
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
    // stepper

    <>
      <style>{".steps-Header a {color:" + "black" + "}"}</style>
      <style>
        {".steps-Header  {background-color:" + "rgba(179,179,179,0.2)" + "}"}
      </style>
      <style>{".Pane.vertical {background-color:" + data.theme1 + "}"}</style>
      <style>{".Pane.vertical {color:" + data.texttheme1 + "}"}</style>
      <style>{".sideheader a{color:" + data.texttheme1 + "}"}</style>
      <style>{".sidelist a{color:" + data.texttheme1 + "}"}</style>
      {data.theme1 == "#181818" ? (
        <style>{".sidelist a:hover{color:" + "lightblue" + "}"}</style>
      ) : (
        <style>{".sidelist a:hover{color:" + "black" + "}"}</style>
      )}
      <style>{".sidelist-active a {color:" + data.theme1 + "}"}</style>
      <style>{".sidelist-active a:hover {color:" + data.theme1 + "}"}</style>
      <style>
        {".sidelist-active {background-color:" + data.texttheme1 + "}"}
      </style>
      <style>{".center {background-color:" + data.theme + "}"}</style>
      <style>{".active-stepper {color:" + "#367f9c" + "}"}</style>
      <style>{".active-tab {color:" + data.texttheme1 + "}"}</style>

      <div className="steps-Header background  d-flex justify-content-center">
        <ul className="steps d-flex">
          {steps.map((step, index) => {
            return (
              <>
                {" "}
                <li className="steps-list ">
                  <Link onClick={() => setStage(`${index + 1}`)}>
                    {" "}
                    <span className="normal">
                      {stage == index + 1 ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span
                      className={stage == index + 1 ? "active-stepper" : ""}
                    >
                      {step}
                    </span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      {/* leftpanel on */}
      {data.value1 == "true" ? (
        <SplitPane
          split="vertical"
          // minSize={200}
          defaultSize={60}
          maxSize={400}
        >
          <div className="">
            {menudata.map((ele, index) => {
              console.log(active);
              return (
                <div className="dropdown">
                  <DropDownContainer>
                    <div className="sideheader ">
                      {ele.Parent === "" ? (
                        <Link
                          className=" align-items-center anchor d-flex justify-content-flex-start"
                          id={index + 1}
                          onClick={(e) => openHandler(ele.Child)}
                        >
                          {" "}
                          <div>
                            <i
                              className={`fas fa-${ele.IconId} left-icon-side`}
                            ></i>
                          </div>
                          <div>
                            <span>{ele.Child}</span>
                          </div>
                          {open == "false" && ele.Child == selectedid ? (
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

                    {/* sidepanel list */}

                    {open === "true" && ele.Parent == selectedid ? (
                      <div>
                        <div
                          className={
                            index + 1 == active
                              ? "sidelist sidelist-active"
                              : "sidelist"
                          }
                        >
                          <div>
                            <Link
                              onClick={() => {
                                setActive(index + 1);
                              }}
                            >
                              <i
                                className={`fas fa-${ele.IconId} left_list_icon`}
                              ></i>

                              {ele.Child}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* <div>
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
                    </div> */}
                  </DropDownContainer>
                </div>
              );
            })}
          </div>
          {data.value2 == "true" ? (
            <SplitPane
              split="vertical"
              minSize={200}
              defaultSize={300}
              maxSize={1000}
            >
              {stage === "1" ? (
                <Button />
              ) : stage === "2" ? (
                <Table />
              ) : stage !== "" ? (
                <ControlHorizontal1 />
              ) : null}

              {data.value2 == "true" ? (
                <>
                  {stage === "1" ? (
                    <Table />
                  ) : stage === "2" ? (
                    <Website />
                  ) : stage !== "" ? (
                    <ControlHorizontal1 />
                  ) : null}
                </>
              ) : null}
            </SplitPane>
          ) : (
            <div>
              {stage === "1" ? (
                <Button />
              ) : stage === "2" ? (
                <Table />
              ) : (
                <ControlHorizontal1 />
              )}
            </div>
          )}
        </SplitPane>
      ) : data.value2 == "true" ? (
        <SplitPane
          split="vertical"
          minSize={500}
          defaultSize={300}
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
              ) : null}
            </>
          ) : null}
        </SplitPane>
      ) : (
        <div>
          {stage === "1" ? (
            <Button />
          ) : stage === "2" ? (
            <Table />
          ) : (
            <ControlHorizontal1 />
          )}
        </div>
      )}
    </>
  );
};

export default LeftSideMenu;
