import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./Contact.css";
import { contactPageData } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import contactMail from "../../assests/images/contactMail.png";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  render() {
    const theme = this.props.theme;

    const customButtonStyle = {
      backgroundColor: this.state.isHovered ? theme.body : theme.text,
      color: this.state.isHovered ? theme.text : theme.body,
      border: `1px solid ${theme.text}`,
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
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    };

    return (
      <div
        className="contact-main"
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
            style={{ width: "100%", textAlign: "center", marginBottom: "40px" }}
          >
            <h1
              className="contact-heading-text"
              style={{ color: "#F2C811", fontSize: "40px", margin: "0 auto" }}
            >
              {ContactData["title"]}
            </h1>
          </div>

          <div
            className="address-heading-div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              className="contact-heading-img-div"
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={contactMail}
                alt="Contact Illustration"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "350px" }}
              />
            </div>

            <div
              className="address-heading-text-div"
              style={{ flex: "1", minWidth: "300px" }}
            >
              <p
                className="contact-header-detail-text subTitle"
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

              <div style={{ marginBottom: "25px" }}>
                <SocialMedia theme={theme} />
              </div>

              <div style={{ marginTop: "10px" }}>
                <a
                  href="mailto:hwaleed0035@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={customButtonStyle}
                  onMouseEnter={() => this.setState({ isHovered: true })}
                  onMouseLeave={() => this.setState({ isHovered: false })}
                >
                  Drop a mail
                </a>
              </div>

              {addressSection && addressSection.title && (
                <div>
                  <h1
                    className="address-heading-text"
                    style={{
                      color: theme.text,
                      fontSize: "24px",
                      marginTop: "20px",
                    }}
                  >
                    {addressSection["title"]}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.blue }}
                  >
                    {addressSection["subtitle"]}
                  </p>
                </div>
              )}

              {phoneSection && phoneSection.title && (
                <div>
                  <h1
                    className="address-heading-text"
                    style={{
                      color: theme.text,
                      fontSize: "24px",
                      marginTop: "20px",
                    }}
                  >
                    {phoneSection["title"]}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.blue }}
                  >
                    {phoneSection["subtitle"]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Contact;
