import { Button } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import propic from "../src/assets/propic.webp";
import SplitPanePage from "./Components/SplitPanePage";
import "./Navbar.css";
import logo from "../src/assets/logo.png";
import color from "./color";
import SplitPane from "react-split-pane";
import Loading from "../src/Control/menu/Components/Loading";
export const userContext = createContext();
function Navbar() {
  let [toggleleft, settoggleleft] = useState("true");
  let [toggleright, settoggleright] = useState("false");
  let [theme, setTheme] = useState("white");
  let [textsteppercolor, settextsteppercolor] = useState("black");
  let [settings, setSettings] = useState("false");
  let [activecolor, setActivecolor] = useState("blue");
  let [isLoading, setIsLoading] = useState("true");

  let themeHandler = () => {
    theme === "white" ? setTheme("#181818") : setTheme("white");
    textsteppercolor === "black"
      ? settextsteppercolor("white")
      : settextsteppercolor("black");
  };

  let toggleleftHandler = () => {
    toggleleft == "true" ? settoggleleft("false") : settoggleleft("true");
  };

  let toggleRightHandler = () => {
    toggleright == "true" ? settoggleright("false") : settoggleright("true");
  };
  useEffect(() => {
    let loader = () => {
      setTimeout(() => {
        setIsLoading("false");
      }, 1000);
    };
    loader();
  });

  return (
    <div>
      {isLoading == "true" ? (
        <Loading />
      ) : (
        <>
          <style>{".bg {background-color:" + theme + "}"}</style>

          <nav className="navbar navbar-dark bg  navbar-expand-lg header left-align ">
            <Link to="" onClick={toggleleftHandler}>
              <i class="fas fa-solid fa-bars left1-icon color_white"></i>
            </Link>

            <Link to="" className="navbar-brand">
              <img src={logo} height="35px" />
            </Link>
            <div className="ml-auto ">
              <ul className="navbar-nav list-right">
                <li>
                  <Popup
                    trigger={
                      <img src={propic} alt="pic" height="30px" width="30px" />
                    }
                    position="bottom center"
                  >
                    <div className="popupmenu">
                      <div className="popuplist ">
                        <div className="list-gap">
                          <Link to="#">
                            <h6>
                              <i className="fas fa-user"></i> Profile
                            </h6>
                          </Link>
                        </div>

                        <div className="list-gap">
                          <Link to="#">
                            <h6>
                              <i className="fas fa-list"></i> Account
                            </h6>
                          </Link>
                        </div>

                        <div className="list-gap">
                          <Link to="/">
                            <h6>
                              <i className="fas fa-right-from-bracket"></i>{" "}
                              Logout
                            </h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </li>
                <li>
                  <Link to="" onClick={themeHandler}>
                    <i
                      class={
                        theme == "#181818"
                          ? "fas fa-solid fa-sun right-icon color_white"
                          : "fas fa-solid fa-moon right-icon color_white"
                      }
                    ></i>
                  </Link>
                </li>

                <li>
                  <Link to="" onClick={toggleRightHandler}>
                    <i class="fas fa-solid fa-bars-staggered right-icon color_white"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <userContext.Provider
            value={{
              value1: toggleleft,
              value2: toggleright,
              theme1: theme,
              texttheme1: textsteppercolor,
              textactive: activecolor,
            }}
          >
            {" "}
            <SplitPanePage />
          </userContext.Provider>
        </>
      )}
    </div>
  );
}

export default Navbar;
