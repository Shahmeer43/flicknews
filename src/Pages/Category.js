import React, { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import NewsItem from "../Components/NewsItem";
import "../Style/Category.css";
import "../extraData";
import dummyData from "../extraData";
import { Link } from "react-router-dom";

export default function Category() {
  const [content, setContent] = useState(null);
  const [unique, setUnique] = useState([0, 1, 2]); // state for saving random numbers
  const [header, setHeader] = useState("Sports");
  const [sequence, setSequence] = useState([0, 1, 2]); // state for saving sequence of news
  //   console.log(header);

  let randomNumber = [];

  let filterTheData = (data) => {
    return data.articles.filter((news) => {
      return (
        news.description !== null &&
        news.url !== null &&
        news.urlToImage !== null
      );
    });
  };

  let findUniqueNews = (filteredData) => {
    while (randomNumber.length < 6) {
      let newRandomNumber = Math.floor(Math.random() * filteredData.length);

      if (!randomNumber.includes(newRandomNumber)) {
        randomNumber.push(newRandomNumber);
      }
    }
  };

  let fetchData = async (category) => {
    let mainHeading = category.charAt(0).toUpperCase() + category.slice(1);
    // console.log(mainHeading);
    setHeader(mainHeading);
    let url = `https://newsapi.org/v2/top-headlines?country&apiKey=1e736cb6441540a4885d9c60e6e6e45b&q=${category}`;
    let urlData = await fetch(url);
    if (urlData.status === 426 || urlData.status === 400) {
      urlData = dummyData;
    }
    let jsonData = await urlData.json();
    let filteredData = filterTheData(jsonData);

    if (filteredData.length < 6) {
      let counter = 6 - filteredData.length;
      for (let i = 0; i < counter; i++) {
        let randomDummy = Math.floor(Math.random() * dummyData.articles.length);
        filteredData.push(dummyData.articles[randomDummy]);
      }
    }

    // console.log(filteredData);
    // console.log(filteredData.length);
    findUniqueNews(filteredData);
    setContent(filteredData);
    setUnique(randomNumber);
    // setHeader(category);
  };

  useEffect(() => {
    fetchData("sports");
  }, []);

  let settingSequence = (sequence, event) => {
    // console.log(event.target.getAttribute("class"));
    if (
      event.target.classList.contains("right") ||
      event.target.getAttribute("class") === "nextButton"
    ) {
      document.querySelector(".prevButton").style.visibility = "visible";
      document.querySelector(".nextButton").style.visibility = "hidden";
    } else {
      document.querySelector(".nextButton").style.visibility = "visible";

      document.querySelector(".prevButton").style.visibility = "hidden";
    }

    setSequence(sequence);
  };

  let sequenceReset = () => {
    setSequence([0, 1, 2]);
    document.querySelector(".prevButton").style.visibility = "hidden";
    document.querySelector(".nextButton").style.visibility = "visible";
  };

  let showCategoryForSmallPhone = () => {
    document.querySelector(
      ".categorySelectionContainerSmallScreens"
    ).style.display = "block";
    document.querySelector(".newsStack").style.overflowY = "hidden";
  };

  let hideCategoryForSmallPhone = () => {
    document.querySelector(
      ".categorySelectionContainerSmallScreens"
    ).style.display = "none";
    document.querySelector(".newsStack").style.overflowY = "visible";
  };

  return (
    content && (
      <div className="categoryContainer">
        <div className="categorySidebar">
          <SideBar selectCategory={fetchData} reset={sequenceReset} />
        </div>
        <div className="newsStack">
          <div className="mainHeadingContainerInCategorySection">
            <h1 className="category-heading">{header} - Top Headlines</h1>
          </div>
          <div className="nextAndprev">
            {/* Prev Button */}
            <span className="prev">
              <button
                onClick={(event) => {
                  settingSequence([0, 1, 2], event);
                }}
                className="prevButton"
              >
                <i className="fa-solid fa-angles-left left"></i>
              </button>
            </span>
            <div>
              <i
                className="fa-solid fa-bars menu-icon-for-phones"
                onClick={showCategoryForSmallPhone}
              ></i>
            </div>

            {/* Next Button */}
            <span className="next">
              <button
                onClick={(event) => {
                  settingSequence([3, 4, 5], event);
                }}
                className="nextButton"
              >
                <i className="fa-solid fa-angles-right right"></i>
              </button>
            </span>
          </div>
          <div className="news-row-1">
            <NewsItem className="news-1" data={content[unique[sequence[0]]]} />
            <NewsItem className="news-2" data={content[unique[sequence[1]]]} />
            <NewsItem className="news-3" data={content[unique[sequence[2]]]} />
          </div>
        </div>

        {/* Responsiveness Work */}

        <div className="mobileSidebarContainer">
          <div className="home-link-mobile">
            <Link to="/">
              <i className="fa-solid fa-arrow-right-to-bracket back-icon-phone"></i>
            </Link>
          </div>

          <div className="mobCategories">
            <div>
              <button
                onClick={() => {
                  fetchData("sports");
                  sequenceReset();
                }}
              >
                Sports
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  fetchData("media");
                  sequenceReset();
                }}
              >
                Media
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  fetchData("politic");
                  sequenceReset();
                }}
              >
                Politics
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  fetchData("health");
                  sequenceReset();
                }}
              >
                Health
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  fetchData("science");
                  sequenceReset();
                }}
              >
                Science
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  fetchData("business");
                  sequenceReset();
                }}
              >
                Business
              </button>
            </div>
          </div>
        </div>

        {/* small size screens */}
        <div className="categorySelectionContainerSmallScreens">
          <div className="categorySelectionContainerSmallScreensOverlay">
            <div className="categorySelectionContainerSmallScreensCross">
              <i
                className="fa-solid fa-xmark"
                onClick={hideCategoryForSmallPhone}
              ></i>
            </div>

            <Link to="/">Home</Link>

            <button
              onClick={() => {
                fetchData("sports");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Sports
            </button>

            <button
              onClick={() => {
                fetchData("media");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Media
            </button>

            <button
              onClick={() => {
                fetchData("politic");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Politics
            </button>

            <button
              onClick={() => {
                fetchData("health");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Health
            </button>

            <button
              onClick={() => {
                fetchData("science");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Science
            </button>

            <button
              onClick={() => {
                fetchData("business");
                sequenceReset();
                hideCategoryForSmallPhone();
              }}
            >
              Business
            </button>
          </div>
        </div>
      </div>
    )
  );
}
