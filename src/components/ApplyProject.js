import { Form, Input, Textarea } from "formsy-react-components";
import Formsy from "formsy-react";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import component from "formsy-react-components/release/hoc/component";
import Loader from "./Loader.js";
import "../styles/Apply.css";

const axios = require("axios");

class ApplyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      loading: false
    };
  }

  render() {
    if (this.state.sent) {
      while (this.state.loading) {
        return (
          <div style={{ padding: "30px", marginLeft: "40%" }}>
            <Loader />
          </div>
        );
      }
      return (
        <div style={{ padding: "30px" }}>
          <h2>Project Created!</h2>
          <img
            style={{ width: "200px", paddingBottom: "15px" }}
            src={"/octo.jpg"}
            alt={"logo"}
          />
          <p>
            Your Project has been successfully created! You can now wait for
            people to start applying to your project!
          </p>
        </div>
      );
    } else {
      return (
        <Form
          className="popupForm"
          onSubmit={data => {
            axios
              .post("http://localhost:8080/projects", {
                projectname: data.projectname,
                projectdetails: data.projectdetaills,
                applicationdeadline: data.applicationdeadline,
                userID: 2
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
          }}
        >
          <h2 style={{ borderBottom: "1px solid black", textAlign: "center" }}>
            Project Application
          </h2>
          <Input
            name="projectname"
            value="The Enigma Project"
            label="Project Name"
          />
          <Textarea
            name="projectdetails"
            value="Enter your project details here"
            label="Describe your project"
          />
          <Input
            type="date"
            name="applicationdeadline"
            label="Application Deadline"
          />
          <Button type="submit"> Submit </Button>
        </Form>
      );
    }
  }
}
export default ApplyProject;
