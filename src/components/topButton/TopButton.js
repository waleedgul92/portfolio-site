import React, { Component } from "react";
import "./TopButton.css";

export default class TopButton extends Component {
  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollFunction.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction);
    window.onscroll = null;
  }

  scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }
  }

  goUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onMouseEnter(color, bgColor) {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }
  }

  onMouseLeave(color, bgColor) {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }
  }

  render() {
    const theme = this.props.theme;
    return (
      <div
        onClick={this.goUpEvent}
        id="topButton"
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
          visibility: "hidden",
        }}
        title="Go to top"
        onMouseEnter={() => this.onMouseEnter(theme.text, theme.body)}
        onMouseLeave={() => this.onMouseLeave(theme.body, theme.text)}
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </div>
    );
  }
}
