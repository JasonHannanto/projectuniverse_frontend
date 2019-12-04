import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar stick="top" className="topnav nvbar justify-content-end">
        <Navbar.Brand className="brand" href="#home">
          Project Universe
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link className="nvitm" href="#home">
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
