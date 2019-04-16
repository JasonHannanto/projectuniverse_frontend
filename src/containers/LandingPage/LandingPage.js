import React, { Component } from "react";
import SkewedContainer from "sc-react";
import NavBar from "../../components/NavBar.js";
import LoginForm from "../../components/LoginForm.js";
import { Link } from "react-router-dom";
import "../../styles/global.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <SkewedContainer
          className="header"
          top="left"
          noMargin
          skew="3"
          bottom="right"
          bgColor="skyblue"
        >
          <div>
            <Link to="/dashboard">Go To Dashboard</Link>
            <p className="mainHeading">CollabSC</p>
            <p className="subHeading">CollabSC</p>
            <LoginForm />
          </div>
        </SkewedContainer>
      </div>
    );
  }
}

export default LandingPage;
