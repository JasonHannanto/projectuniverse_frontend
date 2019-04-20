import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";

const PopUpForm = () => (
  <Popup
    trigger={
      <Button variant="success" className="applyButton">
        {" "}
        Apply{" "}
      </Button>
    }
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);

export default PopUpForm;
