import React, { Component } from "react";
import NavBar from "../../components/NavBar.js";
import "../../styles/Dashboard.css";
import "../../styles/global.css";

import ProjectTable from "../../components/ProjectTable";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
      user: null
    };
  }

  render() {
    if (this.state.user === null) {
      return <div>Please login first</div>;
    }
    return (
      <div>
        <ProjectTable />
      </div>
    );
  }
}

export default Dashboard;
