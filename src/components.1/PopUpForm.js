import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import Apply from "./Apply";

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
    <span>
      <Apply />
    </span>
  </Popup>
);

export default PopUpForm;
