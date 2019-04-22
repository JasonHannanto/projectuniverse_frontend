import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import ApplyProject from "./ApplyProject";

const PopUpFormProject = () => (
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
      <ApplyProject />
    </span>
  </Popup>
);

export default PopUpFormProject;
