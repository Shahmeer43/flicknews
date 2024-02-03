import React, { useState } from "react";
import "../Style/SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const [highlight, setHighlight] = useState("sports");

  return (
    <div className="sidebarContainer">
      <div className="back">
        <Link to="/">
          <i className="fa-solid fa-arrow-right-to-bracket back-icon"></i>
        </Link>
      </div>
      <div className="category-item">
        <button
          className={`category-btn ${
            highlight === "sports" ? "highlight" : ""
          }`}
          onClick={() => {
            props.selectCategory("sports");
            setHighlight("sports");
            props.reset();
          }}
        >
          Sports
        </button>
      </div>
      <div className="category-item">
        <button
          className={`category-btn ${highlight === "media" ? "highlight" : ""}`}
          onClick={() => {
            props.selectCategory("media");
            setHighlight("media");
            props.reset();
          }}
        >
          Media
        </button>
      </div>
      <div className="category-item">
        <button
          className={`category-btn ${
            highlight === "politic" ? "highlight" : ""
          }`}
          onClick={() => {
            props.selectCategory("politic");
            setHighlight("politic");
            props.reset();
          }}
        >
          Politics
        </button>
      </div>

      <div className="category-item">
        <button
          className={`category-btn ${
            highlight === "health" ? "highlight" : ""
          }`}
          onClick={() => {
            props.selectCategory("health");
            setHighlight("health");
            props.reset();
          }}
        >
          Health
        </button>
      </div>

      <div className="category-item">
        <button
          className={`category-btn ${
            highlight === "science" ? "highlight" : ""
          }`}
          onClick={() => {
            props.selectCategory("science");
            setHighlight("science");
            props.reset();
          }}
        >
          Science
        </button>
      </div>

      <div className="category-item">
        <button
          className={`category-btn ${
            highlight === "business" ? "highlight" : ""
          }`}
          onClick={() => {
            props.selectCategory("business");
            setHighlight("business");
            props.reset();
          }}
        >
          Business
        </button>
      </div>
    </div>
  );
}
