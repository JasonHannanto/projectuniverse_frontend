import React, { Component } from "react";
import "../../styles/LandingPage.css";
import SkewedContainer from "sc-react";
import { Navbar, Nav } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar stick="top" className="nvbar justify-content-end">
          <Navbar.Brand className="brand" href="#home">
            CollabSC
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link className="nvitm" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="pull-right nvitm" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="nvitm" href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar>
        <SkewedContainer
          className="header"
          top="left"
          noMargin
          skew="3"
          bottom="right"
          bgColor="skyblue"
        >
          <div>
            <h2>CollabSC</h2>
          </div>
        </SkewedContainer>
      </div>
    );
  }
}

export default LandingPage;
