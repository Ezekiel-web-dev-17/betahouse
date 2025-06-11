import React, { useState } from "react";
import "./Homepage.css";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillGeoAltFill,
} from "react-icons/bs";
import semi from "../../utils/Link.svg";
import special from "../../utils/Link (1).svg";
import split from "../../utils/Link (2).svg";
import twin from "../../utils/Link (3).svg";
import otherI from "../../utils/5c12eb96-dde5-42dc-8430-24495d38f367.jpeg";
import otherII from "../../utils/f3f9436c-0a9d-473d-8973-1c502af61202.jpeg";
import otherIII from "../../utils/efb164e4-b0f7-4eca-a366-4e11d834c457.jpeg";
import line from "../../utils/Line 7.svg";
import Showcase from "../../components/showcase/Showcase.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";

const Homepage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const cards = [
    { src: semi },
    { src: special },
    { src: split },
    { src: twin },
    { src: otherI, title: "Lakeside Bungalow", price: "₦200,000,000" },
    { src: otherII, title: "Glass Storey", price: "₦360,000,000" },
    { src: otherIII, title: "3 Floor Storey", price: "₦320,000,000" },
  ];

  const cardWidth = 300; //Includes image width + gap
  const visibleCards = 4;
  const maxIndex = cards.length - visibleCards;

  const handleLeft = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRight = () => {
    setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="home overflow-x-hidden">
      <Header />
      <main>
        <section>
          <Showcase />
        </section>
        <section className="discover-sect mb-5 pb-5">
          <h2 className="mt-3 pt-3  pb-3 mb-5">
            Discover Our Popular Properties
          </h2>

          <div className="caro-discover position-relative">
            <BsArrowLeftCircle
              className="fs-1 rounded-circle"
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "75px",
                top: "50%",
                color: "white",
                backgroundColor: "#3d9970",
                zIndex: 3,
                boxShadow: "0px 0px 25px black",
              }}
              onClick={handleLeft}
            />

            <div
              className="carousel-window overflow-hidden"
              style={{ width: "92%", margin: "0 auto" }}
            >
              <div
                className="d-flex gap-3"
                style={{
                  transform: `translateX(-${scrollIndex * cardWidth}px)`,
                  transition: "transform 0.7s ease-in-out",
                  width: "max-content",
                }}
              >
                {cards.map((card, i) => (
                  <div key={i} className="position-relative">
                    <img
                      src={card.src}
                      width="290px"
                      height="412px"
                      className="rounded-3"
                      alt=""
                    />
                    {card.title && (
                      <div
                        className="more-details d-flex flex-column align-items-start position-absolute bg-black bg-opacity-25 gap-2 p-3 w-100 rounded-bottom-3"
                        style={{
                          bottom: "0px",
                          color: "white",
                          left: "0px",
                          fontFamily: "Outfit",
                        }}
                      >
                        <h6>{card.title}</h6>
                        <h6 className="mb-0">{card.price}</h6>
                        <div className=" d-flex flex-row align-items-center gap-2">
                          <p className="mb-0" style={{ fontSize: "13px" }}>
                            6 Bed
                          </p>
                          <img src={line} width="5px" height="14px" alt="" />
                          <p className="mb-0" style={{ fontSize: "13px" }}>
                            3 Bath
                          </p>
                          <img src={line} width="5px" height="14px" alt="" />
                          <p className="mb-0" style={{ fontSize: "13px" }}>
                            720sqft
                          </p>
                        </div>
                        <div className="img-location d-flex gap-2 align-items-center">
                          <BsFillGeoAltFill />
                          <p className=" mb-0" style={{ fontSize: "13px" }}>
                            Victoria Island, Lagos
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <BsArrowRightCircle
              className="fs-1 rounded-circle"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "75px",
                top: "50%",
                color: "white",
                backgroundColor: "#3d9970",
                boxShadow: "0px 0px 25px black",
              }}
              onClick={handleRight}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
