
import { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { data } from "../../../dataPortfolio.js";

const Portfolio = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const cardPerPage = 6;
  const lastIndex = currentPage * cardPerPage;
  const firstIndex = lastIndex - cardPerPage;
  const cards = data.slice(firstIndex, lastIndex);

  return (
    <div>
       <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolioNav">
          <h3>My Creative Works Latest Projects</h3>
          <button>
            <a href="https://github.com/l-hseian1">
              View GitHub <i className="fa-solid fa-up-right-from-square"></i> 
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio-cards flex flex-col gap-8 md:flex-row flex-wrap justify-center relative">
        {cards.map((item, index) => {
          return (
            <div
              key={index}
              className="portfolio-card cursor-pointer relative"
              style={{ maxWidth: "600px" }}
            >
              <img
                src={item.photo}
                alt=""
                className="rounded-md"
                style={{ width: "100%" }}
              />
              <div
                className="pos absolute top-0 left-2/4 -translate-x-2/4 z-10 flex flex-col 
                        items-center justify-center gap-10
                        rounded-md"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(68 89 100 / 60%)",
                }}
              >
                <div
                  className="pos-content absolute flex flex-col justify-center items-center gap-10 "
                  style={{ width: "50%" }}
                >
                  <h3 className="text-2xl font-bold text-hover md:text-4xl align-middle">
                    {item.title}
                  </h3>
                  <div className="buttons flex gap-16">
                    <button className="border-2 border-hover hover:bg-hover hover:text-secondery">
                      <Link to={item.github} target="blank">
                        <i className="fa-solid fa-plus text-xl text-hover min-w-full hover:text-secondery "></i>
                      </Link>
                    </button>
                    <button className="border-2 border-hover hover:bg-hover">
                      <Link to={item.url} target="blank">
                        <i
                          className="fa-solid fa-paperclip
                            text-xl text-hover hover:text-secondery min-w-full"
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
