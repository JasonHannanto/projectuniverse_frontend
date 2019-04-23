import React, { Component } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCheckSquare,
  faUser,
  faCoffee,
  fas,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

library.add(faCoffee, faHome, faUser, faCogs);

class SideNavbar extends Component {
  render() {
    return (
      <SideNav
        style={{ backgroundColor: "#990000" }}
        className="sidebar"
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="user">
            <NavIcon>
              <FontAwesomeIcon icon="home" />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="profile">
            <NavIcon>
              <FontAwesomeIcon icon="user" />
            </NavIcon>
            <NavText>Profile</NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <FontAwesomeIcon icon="cogs" />
            </NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavbar;

{
  /* <NavItem eventKey="user">
<NavIcon>
  <FontAwesomeIcon icon="user" />
</NavIcon>
<NavText>Profile</NavText>
<NavItem eventKey="user/settings">
  <NavText>Settings</NavText>
  <NavText>Account</NavText>
  <NavText>Support</NavText>
</NavItem>
</NavItem> */
}
