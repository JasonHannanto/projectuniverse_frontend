import React, { Component } from "react";
import Navbar from "@trendmicro/react-navbar";
import Anchor from "@trendmicro/react-anchor";
import Dropdown from "@trendmicro/react-dropdown";
import { StickyContainer, Sticky } from "react-sticky";
import { Nav, NavDropdown, NavItem, MenuItem } from "@trendmicro/react-navs";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import "@trendmicro/react-dropdown/dist/react-dropdown.css";
import "@trendmicro/react-navs/dist/react-navs.css";
import "@trendmicro/react-navbar/dist/react-navbar.css";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    if (this.state.user === 1) {
      return (
        <StickyContainer>
          <Sticky>
            <Navbar style={{ backgroundColor: "#990000" }}>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Nav navStyle="navbar" style={{ float: "right" }}>
                <Button onClick={() => (window.location = "/")}>Login</Button>
              </Nav>
            </Navbar>
          </Sticky>
        </StickyContainer>
      );
    } else {
      return (
        <StickyContainer>
          <Sticky>
            <Navbar style={{ backgroundColor: "#990000" }}>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Nav navStyle="navbar" style={{ float: "right" }}>
                <Button onClick={() => (window.location = "/")}>Logout</Button>
              </Nav>
            </Navbar>
          </Sticky>
        </StickyContainer>
      );
    }
  }
}

export default TopNavbar;
