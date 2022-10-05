import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Sidebar,
  InputItem,
  DropdownItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";

import "./ControlVertical1.css";

let ControlVertical1 = () => {
  return (
    <div className="background">
      <Sidebar isCollapsed={false}>
        {/* <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/> */}

        <DropdownItem values={["First", "Second", "Third"]}>Menu</DropdownItem>

        <Item>
          <Icon>
            <i className="fas fa-rss-square mr-2" />
            <Link to="button">Button</Link>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <i className="fas fa-info mr-2" />
            <Link to="table">Table</Link>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <i className="fas fa-sitemap mr-2" />
            <Link to="website">Website</Link>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <i className="far fa-address-book mr-2" />
            <Link to="contacts">Contacts</Link>
          </Icon>
        </Item>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default ControlVertical1;
