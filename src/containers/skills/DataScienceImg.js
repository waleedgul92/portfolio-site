import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={require('./visualizations.gif')} // Specify the path to your GIF file
        alt="Data Science & AI"
        style={{
          // width: "1120px",   // Set the width and height according to your needs
          // height: "829.80067px",
          borderRadius: "10px",
        }}
      />
    );
  }
}
