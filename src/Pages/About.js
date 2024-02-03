import React from "react";
import Navbar from "../Components/Navbar";
import "../Style/About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <Navbar page="About" />

      <div className="imageContainerAbout">
        <div className="overlayAbout">
          <div className="aboutTextContainer">
            <div className="aboutTitleContainer">
              <h1 className="aboutTitle">ABOUT FLICKNEWS</h1>
            </div>
            <div className="aboutMissionContainer">
              <p>
                At FlickNews, our mission is simple yet profound: to provide
                accessible, credible, and up-to-the-minute news coverage
                spanning business, health, sports, media, politics, and science.
                We strive to empower our audience with accurate information,
                facilitating an informed and connected world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="line">
        __________________________________________________________________________________________________________________
      </div>

      <div className="whatWeProvideTitle">
        <h1>What We Provide</h1>
      </div>

      <div className="whatWeProvideContainer">
        <div className="what">
          <h2 className="what-title">Diverse News</h2>
          <p>
            At FlickNews, we're committed to delivering diverse and timely news
            spanning business, health, sports, media, politics, and science.
          </p>
        </div>
        <div className="what">
          <h2 className="what-title">Standards</h2>
          <p>
            FlickNews upholds the highest editorial standards, ensuring accuracy
            and integrity in our news coverage. Our team of experienced
            journalists and experts is dedicated to providing you with unbiased
            and well-researched content.
          </p>
        </div>
        <div className="what">
          <h2 className="what-title">Community</h2>
          <p>
            Join our community and be part of the conversation. Engage with us
            through comments, feedback, and social media. At FlickNews, we
            believe in the power of collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
