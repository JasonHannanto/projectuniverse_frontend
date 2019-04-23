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
          skew={3}
          bottom="right"
          bgColor="#990000"
        >
          <div>
            <Button type="success">
              <Link to="/dashboard" style={{ color: "white" }}>
                Guest Access
              </Link>
            </Button>

            <p
              className="mainHeading"
              style={{
                color: "white",
                fontSize: "90px",
                fontWeight: "bolder",
                textAlign: "center"
              }}
            >
              CollabSC
            </p>

            <div
              style={{
                width: "500px",
                textAlign: "center",
                marginLeft: "100px",
                position: "static",
                zIndex: "999",
                margin: "0 auto"
              }}
            >
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
          </div>
        </SkewedContainer>
        <SkewedContainer
          className="header"
          top="left"
          noMargin
          skew={3}
          bottom="right"
          bgColor="#FFC72C"
          style={{ marginTop: "130px", paddingBottom: "500px" }}
        />
      </div>
    );
  }
}

export default LandingPage;
