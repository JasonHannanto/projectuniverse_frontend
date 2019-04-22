import Loader from "react-loader-spinner";
import React, { Component } from "react";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader type="CradleLoader" color="#00BFFF" height="100" width="300" />
    );
  }
}
