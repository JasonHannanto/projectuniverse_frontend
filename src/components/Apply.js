import { Form, Input, Textarea, File } from "formsy-react-components";
import Formsy from "formsy-react";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import component from "formsy-react-components/release/hoc/component";
import Loader from "./Loader.js";
import "../styles/Apply.css";
class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      loading: false
    };
    let notify = this.props.notify;
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

      // this.notify();
      return (
        <div style={{ padding: "30px" }}>
          <h2>Application Sent!</h2>
          <img
            style={{ width: "200px", paddingBottom: "15px" }}
            src={"/octo.jpg"}
            alt={"logo"}
          />
          <p>
            Your Application has been successfully sent. Please wait a few days
            while the owner reviews your application.
          </p>
        </div>
      );
    } else {
      return (
        <Form
          className="popupForm"
          onSubmit={data => {
            console.log(data);
            this.setState({ sent: true, loading: true });
            setTimeout(
              function() {
                this.setState({ loading: false });
              }.bind(this),
              1000
            );
          }}
        >
          <h2 style={{ borderBottom: "1px solid black", textAlign: "center" }}>
            Project Application
          </h2>
          <Textarea
            name="skills"
            value="I bring donuts"
            label="What skillsets can you bring to this project?"
          />
          <Textarea
            name="experience"
            value="I bring cookies"
            label="What previous experiences do you have related to this project?"
          />
          <Textarea
            name="commitment"
            value="I bring tea"
            label="How much time do you have in your schedule to commit to this project?"
          />

          <Textarea
            name="facts"
            value="I bring milk"
            label="Is there anything you would like to share with the team?"
          />

          <File name="resume" label="Upload Resume" />

          <Button type="submit"> Submit </Button>
        </Form>
      );
    }
  }
}
export default Apply;
