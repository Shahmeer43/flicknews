import React from "react";
import Navbar from "../Components/Navbar";
import "../Style/Contact.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Navbar page="Contact" />
      <div className="contactContentContainer">
        <div className="contactHeadingContainer">
          <h1 className="contactMainHeading">Contact Us</h1>
        </div>

        <div className="contactItems">
          <div className="contactInfo contact1">
            <i className="fa-solid fa-phone-flip contact-icon"></i>
            <h2>By Phone</h2>
            <div>
              <p>
                {" "}
                Call us any time. We value direct and personal communication.
              </p>
              <h4>Local</h4>
              <h5>042-47782334</h5>
              <h4>International</h4>
              <h5>+1 (555) 987-6543</h5>
              <h4>Helpline</h4>
              <h5>+1 (555) 123-4567</h5>
            </div>
          </div>
          <div className="contactInfo contact2">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <h2>By Email</h2>

            <div>
              <p>
                Feel free to send us an email, and we'll get back to you as soon
                as possible.
              </p>

              <h4>General Inquiries</h4>
              <p>info@flicknews.com</p>
              <h4>Customer Support</h4>
              <p>support@flicknews.com</p>
              <h4>Business Collaboration</h4>
              <p>partnerships@flicknews.com</p>
            </div>
          </div>
          <div className="contactInfo contact3">
            <div className="social-media-icons">
              <i className="fa-brands fa-square-instagram contact-icon" />
              <i className="fa-brands fa-square-facebook contact-icon" />
              <i className="fa-brands fa-square-x-twitter contact-icon" />
            </div>
            <h2>By Social Media</h2>

            <div className="contact3Content">
              <p>
                Stay updated and join the conversation by connecting with
                FlickNews.
              </p>
              <h4>Facebook</h4>
              <p>facebook.com/FlickNews</p>
              <h4>Instagram</h4>
              <p>instagram.com/FlickNews</p>
              <h4>Twitter</h4>
              <p>twitter.com/FlickNews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
