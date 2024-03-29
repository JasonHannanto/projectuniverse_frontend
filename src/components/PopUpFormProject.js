import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import ApplyProject from "./ApplyProject";

class PopUpFormProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    return (
      <Popup
        trigger={
          <Button variant="success" className="applyButton">
            {" "}
            Create Project{" "}
          </Button>
        }
        modal
        closeOnDocumentClick
      >
        <span>
          <ApplyProject
            notify={this.props.notify}
            user={this.state.user}
            style={{ color: "black" }}
          />
        </span>
      </Popup>
    );
  }
}

export default PopUpFormProject;
