import { Form, Input } from "formsy-react-components";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./form.css";
import { Redirect } from "react-router-dom";

const axios = require("axios");
var bodyFormData = new FormData();

class LoginForm extends Component {
  constructor(props) {
    super(props);
    if (props) {
      if (props.type === "login") {
        this.state = {
          type: "login",
          workflow: null,
          user: null
        };
      } else if (props.type === "register") {
        this.state = {
          type: "register",
          workflow: null,
          user: null
        };
      }
    } else {
      this.state = {
        type: "login",
        user: null
      };
    }
  }

  handle(type) {
    if (type === "login" && this.state.type !== "login") {
      this.setState({ type: "login" });
    } else if (type === "register" && this.state.type !== "register") {
      this.setState({ type: "register" });
    }
  }

  login(data) {
    bodyFormData.set("email", data.email);
    bodyFormData.set("password", data.password);

    axios({
      method: "post",
      url: "http://localhost:8080/login",
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        console.log(response);
        if (response.data.success === true) {
          alert("Login Success");
          this.setState({
            workflow: "login_success",
            user: response.data.userId
          });
        } else {
          alert("Login Failed");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  register(data) {
    axios
      .post("http://localhost:8080/register", {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        password: data.password,
        classstanding: data.classstanding,
        major: data.major,
        phonenumber: data.phonenumber,
        resumeurl: data.resumeurl
      })
      .then(response => {
        if (response.data.success === true) {
          alert("Registration Success");
          this.setState({
            workflow: "registration_success",
            user: response.data.userId
          });
        } else {
          alert("Registration Failed");
          this.setState({
            workflow: "registration_failure",
            user: response.data.userId
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    if (
      this.state.workflow === "registration_success" ||
      this.state.workflow === "login_success"
    ) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { userID: this.state.user }
          }}
        />
      );
    }
    if (this.state.type === "login") {
      return (
        <div className="formDiv">
          <h1>Login</h1>
          <Form
            className="form"
            onSubmit={data => {
              this.login(data);
            }}
          >
            <Input name="email" value="TommyTrojan@usc.edu" label="Email" />
            <Input name="password" value="123" label="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="formDiv">
          <h1>Register</h1>
          <Form
            className="form"
            onSubmit={data => {
              this.register(data);
            }}
          >
            <Input name="fname" value="Trojan" label="First Name" />
            <Input name="lname" value="Trojan" label="Last Name" />
            <Input name="email" value="Trojan" label="Email" />
            <Input name="lname" value="Trojan" label="Last Name" />
            <Input name="password" value="Trojan" label="Password" />
            <Input name="classstanding" value="Trojan" label="Class Standing" />
            <Input name="major" value="Trojan" label="Major" />
            <Input name="phonenumber" value="Trojan" label="Phone Number" />
            <Input name="resumeurl" value="Trojan" label="Resume Link" />
            <Button type="submit">Register</Button>
          </Form>
        </div>
      );
    }
  }
}

export default LoginForm;
