import React, { Component } from "react";
import NavBar from "../../components/NavBar.js";
import SideNavbar from "../../components/SideNavbar.js";
import TopNavbar from "../../components/TopNavbar.js";
import { Jumbotron, Container, Button } from "react-bootstrap";
import PopUpFormProject from "../../components/PopUpFormProject.js";

import "../../styles/Dashboard.css";
import "../../styles/global.css";

import ProjectTable from "../../components/ProjectTable";
import { get } from "https";

const axios = require("axios");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // the initial application state
    if (props.location.state !== undefined) {
      console.log(props);
      this.state = {
        user: props.location.state.userID,
        userInfo: null,
        type: "user",
        projects: null,
        userProjects: null
      };
    } else {
      this.state = {
        user: 1,
        userInfo: null,
        type: "guest",
        projects: null,
        userProjects: null
      };
    }
    this.retrieveAllProjects();
    this.retrieveProject(this.state.user);
  }

  retrieveAllProjects() {
    axios
      .get("http://localhost:8080/projects")
      .then(res => {
        let projRes = res.data;
        this.setState({ projects: projRes });
        console.log(this.state);
      })
      .then(() => {
        axios
          .get("http://localhost:8080/users/" + this.state.user)
          .then(res => {
            console.log({ OVERHERE: res });

            let projRes = res.data;
            this.setState({ userInfo: projRes });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  retrieveProject(userID) {
    axios
      .get("http://localhost:8080/projects/user/" + userID)
      .then(res => {
        console.log({ here: res });
        let projRes = res.data;
        this.setState({ userProjects: projRes });
      })
      .catch(error => {
        console.log(error);
        this.setState({ userProjects: [] });
      });
  }

  componentWillMount() {
    this.retrieveAllProjects();
    this.retrieveProject(this.state.user);
  }
  retrieveUserProjects(userID) {
    axios
      .get("http://localhost:8080/projects/" + this.state.user)
      .then(res => {
        let projRes = res.data;
        this.setState({ projects: projRes });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state);
    if (this.state.user === null) {
      return <div>Please login first</div>;
    }
    while (
      this.state.projects === null ||
      this.state.userProjects === null ||
      this.state.userInfo === null
    ) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SideNavbar />
        <div className="dashboard">
          <TopNavbar />
          <Jumbotron fluid style={{ marginBottom: "0px" }}>
            <Container>
              <h1>Morning, {this.state.userInfo.fname}!</h1>
            </Container>
          </Jumbotron>
          <PopUpFormProject />

          <div className="tableheaders">
            <p style={{ marginBottom: "0px" }}>Your Projects</p>
          </div>
          <ProjectTable projects={this.state.userProjects} />
          <p className="tableheaders" style={{ marginBottom: "0px" }}>
            All Projects
          </p>
          <ProjectTable projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
