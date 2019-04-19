import React, { Component } from "react";
import NavBar from "../../components/NavBar.js";
import { Link } from "react-router-dom";
import "../../styles/Profile.css";
import "../../styles/global.css";

const axios = require("axios");

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log({ props: props });
    // the initial application state
    this.state = {
      user: props.userID,
      userInfo: null
    };
  }

  retrieveProfile(userID) {
    axios
      .get("http://localhost:8080/users/" + this.state.user)
      .then(res => {
        this.setState({ userInfo: res });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <div>Profile Page</div>;
  }
}

export default Profile;
