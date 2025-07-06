import React, { useRef, useState } from "react";
import "./Showcase.css";
import { BsFillGeoAltFill, BsShare, BsHeart } from "react-icons/bs";
import imglink1 from "../../utils/Vector (9).svg";
import imglink2 from "../../utils/Vector (8).svg";
import imglink3 from "../../utils/Vector (7).svg";
import right from "../../utils/Vector (5).svg";
import arrowToFro from "../../utils/Vector (4).svg";
import bed from "../../utils/Icon.svg";
import bathroom from "../../utils/Vector (6).svg";
import shows from "../../showapi.js";
import Dropdown from "../dropdown/Dropdown.jsx";
import { Link } from "react-router-dom";

const Showcase = ({ currentPage }) => {
  let cardWidth;
  window.innerWidth <= 375 ? (cardWidth = 480) : (cardWidth = 1320);
  const [showSort, setShowSort] = useState(shows);
  const [from, setFrom] = useState(1);
  const less = showSort.slice(0, 9);
  const more = showSort.slice(9);
  const [to, setTo] = useState(less.length);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef(null);
  const moreRef = useRef(null);
  const lessRef = useRef(null);

  const handleRight = () => {
    setTranslate(1);
    setFrom(to + 1);
    setTo(shows.length);
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Adjust height to match `.more`
    const newHeight = moreRef.current.offsetHeight;
    lessRef.current.style.height = `${newHeight}px`;
  };

  const handleLeft = () => {
    setTranslate(0);
    setFrom(1);
    setTo(less.length);
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    lessRef.current.style.height = `1567px`;
  };

  return (
    <div className="px-sm-5 pt-4">
      {currentPage === "Home" ? (
        <div>
          <h3 className="fw-bold" style={{ color: "#3d9970" }}>
            Our Properties
          </h3>
        </div>
      ) : (
        <Dropdown
          from={from}
          shows={shows}
          showSort={showSort}
          setShowSort={setShowSort}
          to={to}
        />
      )}
      <div
        className=" overall overflow-hidden"
        ref={containerRef}
        style={{ maxWidth: "100%", margin: "0 auto" }}
      >
        <div
          className="all d-flex align-items-start gap-5 overflow-hidden"
          style={{
            minWidth: "5000px",
            transform: `translateX(-${translate * cardWidth}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div
            ref={lessRef}
            className=" d-sm-grid d-flex flex-column mt-4 ms-1"
          >
            {less.map((show, i) => (
              <div key={i} className="less-inner-con">
                <Link
                  to={`/house/:${i + 1}`}
                  className="less text-decoration-none"
                >
                  <div className=" position-relative">
                    <img
                      src={show.image}
                      className="rounded-top-4 photo"
                      alt=""
                    />
                    <div>
                      <span className=" featured rounded-2 text-white position-absolute w-100">
                        Featured
                      </span>
                      <span className="for rounded-2 text-white position-absolute w-100">
                        For {show.whatFor}
                      </span>
                    </div>
                    <div className="position-absolute link-rec-img">
                      <img
                        src={imglink1}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                      <img
                        src={imglink2}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                      <img
                        src={imglink3}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="about-card p-3 border-1 rounded-bottom-4 d-flex align-items-start flex-column">
                    <h4 className=" mb-0">{show.title}</h4>
                    <p
                      className="mb-3"
                      style={{ color: "#666666", font: "Outfit" }}
                    >
                      {<BsFillGeoAltFill />} {show.location}
                    </p>
                    <div
                      className="d-flex justify-content-between w-100 pe-5"
                      style={{ color: "#666666", font: "Outfit" }}
                    >
                      <span className="d-flex justify-content-between gap-2 me-sm-0 me-4">
                        <img src={bed} alt="" />
                        <p className="mb-0 abt">{show.bed} Bedrooms</p>
                      </span>
                      <span className="d-flex justify-content-between gap-2 me-5">
                        <img src={bathroom} alt="" />
                        <p className="mb-0 abt">{show.bath} Bathrooms</p>
                      </span>
                    </div>

                    <div className=" w-100 d-flex justify-content-between align-items-center border-top border-dark-subtle border-1 mt-3 pt-4">
                      <h4 className="mb-0">
                        ₦ {show.price}
                        {i % 2 === 0 ? "/1 Year" : ""}
                      </h4>
                      <img src={arrowToFro} alt="" />
                      <BsShare />
                      <BsHeart />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div
            className={`d-sm-grid ${
              currentPage === "Home" && window.innerWidth <= 375
                ? "d-none"
                : "d-flex flex-column"
            } mt-4 ms-sm-5 ms-3`}
            style={{ maxHeight: "fit-content" }}
          >
            {more.map((show, i) => (
              <div key={i} className="ms-3 ms-sm-0">
                <Link
                  to={`/house/:${i + 10}`}
                  className="less  text-decoration-none"
                >
                  <div ref={moreRef} className="more position-relative">
                    <img
                      src={show.image}
                      className="rounded-top-4 photo photo2"
                      alt=""
                    />
                    <div>
                      <span className=" featured rounded-2 text-white position-absolute w-100">
                        Featured
                      </span>
                      <span className="for rounded-2 text-white position-absolute w-100">
                        For {show.whatFor}
                      </span>
                    </div>
                    <div className="position-absolute link-rec-img">
                      <img
                        src={imglink1}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                      <img
                        src={imglink2}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                      <img
                        src={imglink3}
                        className="fs-2"
                        width="30px"
                        height="30px"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="about-card p-3 border-1 rounded-bottom-4 d-flex align-items-start flex-column">
                    <h4 className=" mb-0">{show.title}</h4>
                    <p
                      className="mb-3"
                      style={{ color: "#666666", font: "Outfit" }}
                    >
                      {<BsFillGeoAltFill />} {show.location}
                    </p>
                    <div
                      className="d-flex justify-content-between w-100 pe-sm-5 pe-0"
                      style={{ color: "#666666", font: "Outfit" }}
                    >
                      <span className="d-flex justify-content-between gap-2 me-sm-0 me-4">
                        <img src={bed} alt="" />
                        <p className="mb-0 abt">{show.bed} Bedrooms</p>
                      </span>
                      <span className="d-flex justify-content-between gap-2 me-5">
                        <img src={bathroom} alt="" />
                        <p className="mb-0 abt">{show.bath} Bathrooms</p>
                      </span>
                    </div>

                    <div className=" w-100 d-flex justify-content-between align-items-center border-top border-dark-subtle border-1 mt-3 pt-4">
                      <h4 className="mb-0">₦ {show.price}</h4>
                      <img src={arrowToFro} alt="" />
                      <BsShare />
                      <BsHeart />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className=" d-flex align-items-center gap-3 justify-content-center mt-3 mb-4"
        style={{ cursor: "pointer" }}
      >
        {currentPage === "Home" ? (
          <Link
            to="/properties"
            className="fs-4 fw-semibold"
            style={{
              textDecorationStyle: "dashed",
              textDecorationThickness: "4px",
              textUnderlineOffset: "5px",
            }}
          >
            Click For More Properties.
          </Link>
        ) : (
          <>
            <img
              src={right}
              style={{ transform: "rotateY(180deg)" }}
              onClick={() => {
                handleLeft();
              }}
              alt="left arrow"
            />
            <h4 className="mb-0">1</h4>
            <h4 className="mb-0">2</h4>
            <img
              onClick={() => {
                handleRight();
              }}
              src={right}
              alt="right arrow"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Showcase;
