import React from "react";
import { Link } from "react-router-dom";
import "../Style/NewsItem.css";

export default function NewsItem(props) {
  // console.log(props);
  return (
    <div className="news-item">
      <div className="imageContainer">
        <img src={props.data.urlToImage} alt="" className="newsImage"></img>
      </div>
      <div className="content">
        <div className="news-title">{props.data.title}</div>
        <div className="source-link">
          <Link to={props.data.url} target="_blank">
            <span className="linkText">Source</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
