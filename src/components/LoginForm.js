// import { Form, Input } from "formsy-react-components";
import React, { Component } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
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
    data.preventDefault();
    console.log({ here: data })
    bodyFormData.set("email", this.refs.email.value);
    bodyFormData.set("password", this.refs.password.value);
    axios({
      method: "post",
      url: "http://localhost:8080/login",
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
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
      .catch(function (error) {
        console.log(error);
      });
  };

  register(data) {
    console.log({ data123: data });
    bodyFormData.set("fname", data.fname);
    bodyFormData.set("lname", data.lname);
    bodyFormData.set("email", data.email);
    bodyFormData.set("password", data.password);
    bodyFormData.set("classstanding", data.classstanding);
    bodyFormData.set("major", data.major);
    bodyFormData.set("password", data.password);
    bodyFormData.set("resumeurl", data.resumeurl);

    axios({
      method: "post",
      url: "http://localhost:8080/register",
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      // axios
      //   .post("http://localhost:8080/register", {
      //     fname: data.fname,
      //     lname: data.lname,
      //     email: data.email,
      //     password: data.password,
      //     classstanding: data.classstanding,
      //     major: data.major,
      //     phonenumber: data.phonenumber,
      //     resumeurl: data.resumeurl
      //   })
      .then(response => {
        console.log({ WATRETURNED: response });
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
      .catch(function (error) {
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

          <Form className="form" onSubmit={(e) => this.login(e)}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref="email"
                defaultValue="bob@gmail.com"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value="nono"
                ref="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* <Form
            className="form"
            onSubmit={data => {
              this.login(data);
            }}
          >
            <Input name="email" value="TommyTrojan@usc.edu" label="Email" />
            <Input name="password" value="123" label="Password" />
            <Button type="submit">Login</Button>
          </Form> */}
        </div>
      );
    } else {
      return (
        <div className="formDiv">
          <h1>Register</h1>
          <Form
            className="form"
          // onSubmit={data => {
          //   this.register(data);
          // }}
          >
            <input name="fname" label="First Name" />
            <input name="lname" value="Trojan" label="Last Name" />
            <input name="email" value="Trojan@usc.edu" label="Email" />
            <input name="lname" value="Trojan" label="Last Name" />
            <input name="password" value="123456" label="Password" />
            <input name="classstanding" value="1" label="Class Standing" />
            <input name="major" value="Trojan" label="Major" />
            <input name="phonenumber" value="Trojan" label="Phone Number" />
            <input name="resumeurl" value="Trojan" label="Resume Link" />
            <Button type="submit">Register</Button>
          </Form>
        </div>
      );
    }
  }
}

export default LoginForm;
