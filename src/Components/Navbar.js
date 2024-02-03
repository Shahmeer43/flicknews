import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  let navbarStyleForAbout = {
    backgroundColor: "grey",
    position: "static",
  };

  let navbarStyleForContact = {
    navbarBackground: {
      backgroundColor: "white",
      top: 0,
      position: "static",
    },

    Logo: {
      backgroundColor: "#87c512",
    },

    brandNameH2: {
      color: "#3b3939",
    },

    brandNameSpan: {
      WebkitTextStroke: "1px black",
      color: "rgba(255, 255, 255, 1)",
    },

    link: {
      color: "#3b3939",
    },
  };

  let showMobileMenu = () => {
    document.querySelector(".mobileMenuContainer").style.display = "block";
  };

  let hideMobileMenu = () => {
    document.querySelector(".mobileMenuContainer").style.display = "none";
  };

  return (
    <div
      className="navbarContainer"
      style={
        page === "Contact"
          ? navbarStyleForContact.navbarBackground
          : page === "About"
          ? navbarStyleForAbout
          : {}
      }
    >
      <div className="brandName">
        <div
          className="F-logo logo"
          style={page === "Contact" ? navbarStyleForContact.Logo : {}}
        >
          F
        </div>
        <div
          className="N-logo logo"
          style={page === "Contact" ? navbarStyleForContact.Logo : {}}
        >
          N
        </div>
        <h2 style={page === "Contact" ? navbarStyleForContact.brandNameH2 : {}}>
          Flick
          <span
            className="outliner"
            style={
              page === "Contact" ? navbarStyleForContact.brandNameSpan : {}
            }
          >
            News
          </span>
        </h2>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <Link
              to="/"
              className={`link ${
                page === "Home" ? "currentPageHighlight" : ""
              }`}
              style={page === "Contact" ? navbarStyleForContact.link : {}}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/About"
              className={`link ${
                page === "About" ? "currentPageHighlight" : ""
              }`}
              style={page === "Contact" ? navbarStyleForContact.link : {}}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className={`link ${
                page === "Contact" ? "currentPageHighlight" : ""
              }`}
              style={page === "Contact" ? navbarStyleForContact.link : {}}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* For Responsiveness */}
      <div className="menuToggler">
        <i
          className="fa-solid fa-bars menuTogglerIcon"
          onClick={showMobileMenu}
          style={page === "Contact" ? { color: "#3b3939" } : {}}
        ></i>
      </div>

      <div className="mobileMenuContainer">
        <div className="crossContainer">
          <i className="fa-solid fa-xmark" onClick={hideMobileMenu}></i>
        </div>
        <div className="mobileOverlay">
          <Link to="/" className="mobileMenuLink">
            Home
          </Link>
          <Link to="/About" className="mobileMenuLink">
            About
          </Link>
          <Link to="/Contact" className="mobileMenuLink">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
