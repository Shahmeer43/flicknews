import React, { useState, useEffect } from "react";
import "../Style/Slider.css";
import { Link } from "react-router-dom";

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(1);
  let slidingImages = [
    "Images/post_1.jpg",
    "Images/post_2.jpg",
    "Images/post_3.jpg",
    "Images/post_4.jpg",
    "Images/post_5.jpg",
    "Images/post_6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector(
        ".sliderContainer"
      ).style.backgroundImage = `url(${slidingImages[imageIndex]})`;

      setImageIndex(imageIndex + 1);

      if (imageIndex === slidingImages.length - 1) {
        setImageIndex(0);
        // console.log(true);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div className="sliderContainer">
      <div className="overlay">
        <h1 className="slider-h1">FlickNews: Your Daily Digest</h1>
        <p className="slider-para">
          Stay ahead with our dynamic news platform, delivering the latest
          updates in sports, politics, and more. Explore a diverse range of
          engaging stories that keep you informed and entertained.
        </p>
        <Link className="slider-link" to="/category">
          Headlines
        </Link>
      </div>
    </div>
    // 1e736cb6441540a4885d9c60e6e6e45b new api key
  );
}
