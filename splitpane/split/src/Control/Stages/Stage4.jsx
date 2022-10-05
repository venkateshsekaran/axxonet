import React, { useState } from "react";
import SplitPane from "react-split-pane";
import Controlvertical from "../Controlvertical";
import ControlVertical1 from "../ControlVertical1";
import ControlHorizontal1 from "../ControlHorizontal1";
import ControlHorizontal2 from "../ControlHorizontal2";
import { Link, Outlet } from "react-router-dom";
import Button from "../menu/Button";
import Table from "../menu/Table";
import {
  Sidebar,
  InputItem,
  DropdownItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";

const Stage1 = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <SplitPane className="" split="vertical" defaultSize="50%" maxSize={1000}>
        <SplitPane split="vertical" defaultSize="50%" primary="second">
          <div className="background">
            <Sidebar isCollapsed={false}>
              {/* <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/> */}
              <LogoText className="">Side Bar</LogoText>
              {/* <DropdownItem
          values={['First', 'Second', 'Third']}
          >
          Menu
          
        </DropdownItem> */}

              <Item>
                <Icon>
                  <i className="fas fa-rss-square mr-2" />
                  <Link
                    onClick={() => {
                      setActive("button");
                    }}
                  >
                    Button
                  </Link>
                </Icon>
              </Item>
              <Item>
                <Icon>
                  <i className="fas fa-info mr-2" />
                  <Link
                    onClick={() => {
                      setActive("table");
                    }}
                  >
                    Table
                  </Link>
                </Icon>
              </Item>
              <Item>
                <Icon>
                  <i className="fas fa-sitemap mr-2" />
                  <Link to="">Website</Link>
                </Icon>
              </Item>
              <Item>
                <Icon>
                  <i className="far fa-address-book mr-2" />
                  <Link to="">Contacts</Link>
                </Icon>
              </Item>
            </Sidebar>
            <Outlet />
          </div>
          <SplitPane
            split="horizontal"
            minSize={300}
            defaultSize="50%"
            primary="second"
          >
            {active === "button" ? (
              <Button />
            ) : active === "table" ? (
              <Table />
            ) : (
              <ControlHorizontal1 />
            )}
            <ControlHorizontal2 />
          </SplitPane>
        </SplitPane>

        <Controlvertical />
      </SplitPane>

      <Outlet />
    </div>
  );
};

export default Stage1;
