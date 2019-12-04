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
    this.setState({ type: "login" });
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
    this.setState({ type: "register" });
    data.preventDefault();
    bodyFormData.set("fname", this.refs.fname.value);
    bodyFormData.set("lname", this.refs.lname.value);
    bodyFormData.set("email", this.refs.email.value);
    bodyFormData.set("password", this.refs.password.value);
    bodyFormData.set("classstanding", this.refs.classStanding.value);
    bodyFormData.set("major", this.refs.major.value);
    bodyFormData.set("password", this.refs.phoneNumber.value);
    bodyFormData.set("resumeurl", this.refs.resumeLink.value);

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
                defaultValue="nono"
                ref="password"
                placeholder="Password"
              />
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

          <Form className="form" onSubmit={(e) => this.register(e)}>
            <Form.Group controlId="email">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                ref="fname"
                defaultValue="Tommy"
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue="Trojan"
                ref="lname"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue="Trojan"
                ref="lname"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="emaill"
                defaultValue="Trojan@usc.edu"
                ref="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue="123456"
                ref="password"
                placeholder="Enter Password"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Class Standing</Form.Label>
              <Form.Control
                type="text"
                defaultValue="1"
                ref="classStanding"
                placeholder="Enter Grade Year (1-4)"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Major</Form.Label>
              <Form.Control
                type="text"
                defaultValue="Computer Science"
                ref="major"
                placeholder="Enter Major"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                defaultValue="6265044231"
                ref="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Resume Link</Form.Label>
              <Form.Control
                defaultValue="https://jasonhannanto.github.io/"
                ref="resumeLink"
                placeholder="Enter Link to Resume"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
        </div>

        /* <Form
          className="form"
         onSubmit={data => {
           this.register(data);
         }}
        >
          <Input name="fname" label="First Name" />
          <Input name="lname" value="Trojan" label="Last Name" />
          <Input name="email" value="Trojan@usc.edu" label="Email" />
          <Input name="lname" value="Trojan" label="Last Name" />
          <Input name="password" value="123456" label="Password" />
          <Input name="classstanding" value="1" label="Class Standing" />
          <Input name="major" value="Trojan" label="Major" />
          <Input name="phonenumber" value="Trojan" label="Phone Number" />
          <Input name="resumeurl" value="Trojan" label="Resume Link" />
          <Button type="submit">Register</Button>
        </Form> */
      );
    }
  }
}

export default LoginForm;
