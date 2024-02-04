import React, { useState, useEffect } from "react";
import "../Style/Slider.css";
import { Link } from "react-router-dom";

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(1);
  let slidingImages = [
    "https://i.ibb.co/rf238LN/post-1.jpg",
    "https://i.ibb.co/nD5W7N7/post-2.jpg",
    "https://i.ibb.co/3N1M3j0/post-3.jpg",
    "https://i.ibb.co/bXcqJY3/post-4.jpg",
    "https://i.ibb.co/NFTZKVx/post-5.jpg",
    "https://i.ibb.co/Dbzkx8B/post-6.jpg",
  ];

  useEffect(() => {
    // const currentUrl = window.location.href;
    // console.log(currentUrl);
    const interval = setInterval(() => {
      document.querySelector(
        ".sliderContainer"
      ).style.backgroundImage = `url(${slidingImages[imageIndex]})`;

      setImageIndex(imageIndex + 1);

      if (imageIndex === slidingImages.length - 1) {
        setImageIndex(0);
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
  );
}
