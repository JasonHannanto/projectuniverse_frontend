import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import Apply from "./Apply";

class PopUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
    console.log({ boom: props });
    let notify = props.notify;
  }
  render() {
    if (this.state.user === 1) {
      return <div />;
    } else {
      return (
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
    }
  }
}

export default PopUpForm;
