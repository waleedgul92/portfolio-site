import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import contactMailImg from "../../assests/images/address_image.svg";

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
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={contactMailImg}
                  alt="Contact Mail Illustration"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "350px",
                  }}
                />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: "#F2C811" }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
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
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.blue }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
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
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
export default Contact;
