import React, { Component } from "react";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import addressImg from "../../assests/images/address_image.svg";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  render() {
    const theme = this.props.theme;

    const filledButtonStyle = {
      backgroundColor: this.state.isHovered ? "transparent" : "#FFFFFF",
      color: this.state.isHovered ? "#FFFFFF" : "#000000",
      border: "1px solid #FFFFFF",
      padding: "13px 28px",
      borderRadius: "5px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
      fontFamily: "Google Sans Medium, sans-serif",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    };

    return (
      <div
        id="contact"
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "4rem",
          paddingBottom: "40px",
        }}
      >
        <Fade bottom duration={1000} distance="40px">
          <div
            style={{ width: "100%", textAlign: "left", marginBottom: "40px" }}
          >
            <h1
              style={{
                color: "#F2C811",
                fontSize: "40px",
                margin: "0 auto",
                fontFamily: "Google Sans Bold, sans-serif",
                textAlign: "left",
              }}
            >
              {ContactData["title"]}
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={addressImg}
                alt="Contact Illustration"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "320px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ flex: "1", minWidth: "300px" }}>
              <p
                className="subTitle"
                style={{
                  color: theme.text,
                  fontSize: "18px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                  marginBottom: "30px",
                }}
              >
                {ContactData["description"]}
              </p>

              <div style={{ marginBottom: "30px" }}>
                <SocialMedia theme={theme} />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="mailto:hwaleed0035@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={filledButtonStyle}
                  onMouseEnter={() => this.setState({ isHovered: true })}
                  onMouseLeave={() => this.setState({ isHovered: false })}
                >
                  Drop a mail
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Contact;
