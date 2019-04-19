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
  render() {
    return (
      <StickyContainer>
        <Sticky>
          <Navbar>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav navStyle="navbar">
              <NavItem className="text-center" style={{ minWidth: 72 }}>
                <i className="fa fa-star" style={{ color: "#fff" }} />
              </NavItem>
              <NavDropdown
                autoOpen
                noCaret
                eventKey="dashboard"
                title="Dashboard"
              >
                <MenuItem eventKey="dashboard.1">Menu Item 1</MenuItem>
                <MenuItem eventKey="dashboard.2">Menu Item 2</MenuItem>
                <MenuItem eventKey="dashboard.3">Menu Item 3</MenuItem>
                <MenuItem eventKey="dashboard.4">Menu Item 4</MenuItem>
              </NavDropdown>
              <NavDropdown
                autoOpen
                noCaret
                eventKey="administration"
                title="Administration"
              >
                <MenuItem eventKey="administration.1">Menu Item 1</MenuItem>
                <MenuItem eventKey="administration.2">Menu Item 2</MenuItem>
                <MenuItem eventKey="administration.3">Menu Item 3</MenuItem>
                <MenuItem eventKey="administration.4">
                  Menu item 4
                  <MenuItem eventKey="administration.4.1">
                    Second level item one
                  </MenuItem>
                  <MenuItem eventKey="administration.4.2">
                    Second level item two
                  </MenuItem>
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default TopNavbar;
