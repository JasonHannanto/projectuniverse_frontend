import React, { Component } from "react";
import Navbar from "@trendmicro/react-navbar";
import Anchor from "@trendmicro/react-anchor";
import Dropdown from "@trendmicro/react-dropdown";
import { StickyContainer, Sticky } from "react-sticky";
import { Nav, NavDropdown, NavItem, MenuItem } from "@trendmicro/react-navs";
import PropTypes from "prop-types";

import "@trendmicro/react-dropdown/dist/react-dropdown.css";
import "@trendmicro/react-navs/dist/react-navs.css";
import "@trendmicro/react-navbar/dist/react-navbar.css";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StickyContainer>
        <Sticky>
          <Navbar style={{ backgroundColor: "black" }}>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav navStyle="navbar" style={{ float: "right" }}>
              <NavDropdown
                autoOpen
                style={{ borderRight: "1px solid black" }}
                eventKey="dashboard"
                title="Account"
              >
                <MenuItem eventKey="dashboard.1">Menu Item 1</MenuItem>
                <MenuItem eventKey="dashboard.2">Menu Item 2</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default TopNavbar;
