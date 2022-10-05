import React from "react";

function Footer() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-secondary  navbar-expand-lg">
        <a href="" className="navbar-brand">
          Split Pane
        </a>
        <div className="mx-auto ">
          <ul className="navbar-nav    ">
            <li className="nav-item mr-5">
              <a href="./controls" className="nav-link text-light">
                Controls
              </a>
            </li>
            <li className="nav-item mr-5 ">
              <a href="./interactions" className="nav-link text-light">
                Interactions
              </a>
            </li>
            <li className="nav-item mr-5 ">
              <a href="./design" className="nav-link text-light  ">
                Design
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
