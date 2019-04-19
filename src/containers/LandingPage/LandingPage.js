import React, { Component } from "react";
import SkewedContainer from "sc-react";
import NavBar from "../../components/NavBar.js";
import LoginForm from "../../components/LoginForm.js";
import { Link } from "react-router-dom";
import { ButtonToolbar, Button } from "react-bootstrap";
import "../../styles/global.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
      type: "login"
    };
  }
  handle(type) {
    if (type === "login" && this.state.type !== "login") {
      this.setState({ type: "login" });
    } else if (type === "register" && this.state.type !== "register") {
      this.setState({ type: "register" });
    }
  }
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
            <ButtonToolbar>
              <Button onClick={() => this.handle("login")} variant="primary">
                Login
              </Button>
              <Button
                onClick={() => this.handle("register")}
                variant="secondary"
              >
                Register
              </Button>
            </ButtonToolbar>
            {this.state.type === "login" ? (
              <LoginForm type="login" />
            ) : (
              <LoginForm type="register" />
            )}
          </div>
        </SkewedContainer>
      </div>
    );
  }
}

export default LandingPage;
