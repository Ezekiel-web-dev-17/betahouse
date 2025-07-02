import main from "../../utils/Discover the charm and convenience of prefab homes….jpeg";
import demoI from "../../utils/b-11.jpg (4).svg";
import demoII from "../../utils/b-11.jpg (8).svg";
import demoIV from "../../utils/b-11.jpg (2).svg";
import shows from "../../showapi.js";
import "./EachHouse.css";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/StateContext";

const EachHoouse = () => {
  const params = useParams();
  const { id, image, whatFor, title, location, bed, bath, price } = shows.find(
    (item) => item.id == params.id.slice(1)
  );
  const [mainImg, setMainImg] = useState(image);
  const user = localStorage.getItem("userId");
  const imgArr = [image, demoI, demoII, demoIV];
  const { addToCart } = useContext(AppContext);
  const [disable, setDisable] = useState(false);

  return (
    <div className=" d-flex gap-5 px-5 mx-5 mt-5 pt-5 align-items-center pb-5">
      <div className="w-50 d-flex flex-column gap-3 justify-content-center align-items-center mt-5">
        <div
          className="w-100 rounded border border-5 border-light main"
          style={{
            height: "400px",
            overflow: "hidden",
          }}
        >
          <img
            src={mainImg}
            height="500px"
            className="w-100 rounded border border-5 border-light"
            alt=""
          />
        </div>
        <div className="w-100 d-flex align-items-center gap-3">
          {imgArr.map((index, i) => (
            <img
              key={i}
              className="rounded"
              style={{
                width: "25%",
                height: "95px",
                border:
                  mainImg !== index
                    ? "5px solid #f4f4f4"
                    : "5px solid rgb(240, 243, 73)",
                cursor: "Pointer",
              }}
              src={index}
              height="500px"
              onClick={() => {
                setMainImg(imgArr[i]);
              }}
              alt=""
            />
          ))}
        </div>
      </div>
      <article className=" w-50 mt-5 text-start d-flex flex-column gap-2">
        <h2 className="mb-0 fw-bold">{title}</h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magni officiis placeat perferendis laborum autem? Distinctio harum nam
          suscipit nihil beatae nisi! Suscipit, odit. Similique doloremque
          recusandae rem? Facilis corrupti vel modi qui culpa incidunt
          voluptates eveniet, ipsam minus fugiat ipsum, natus quod nihil
          placeat, quidem esse excepturi voluptas porro! For: {whatFor}
        </p>

        <span className=" d-flex gap-2">
          <label className=" fs-6">Price: </label>
          <h5 className=" fw-bold mb-0">{price}</h5>
        </span>
        <span className=" d-flex gap-2">
          <label className=" fs-6">Location: </label>
          <h5 className=" fw-semibold mb-0">{location}</h5>
        </span>
        <div>
          <span className=" d-flex gap-2">
            <label className=" fs-6">Number of Bedrooms: </label>
            <h5 className=" fw-semibold">{bed}</h5>
          </span>

          <span className=" d-flex gap-2">
            <label className=" fs-6">Number of Bathrooms: </label>
            <h5 className=" fw-semibold mb-4">{bath}</h5>
          </span>
        </div>
        <div className=" d-flex gap-5">
          <button
            className=" rounded fs-6 py-1 fw-bold w-100 bg-white"
            style={{
              color: disable ? "rgb(162, 196, 181)" : "#3d9970",
              border: `2px solid ${disable ? "rgb(162, 196, 181)" : "#3d9970"}`,
              cursor: disable ? "not-allowed" : "pointer",
            }}
            disabled={disable}
            onClick={() => {
              var propertyObj = shows.find(
                (item) => item.id == params.id.slice(1)
              );
              setDisable(true);
              addToCart(propertyObj);
            }}
          >
            {whatFor === "Sale" ? "Add To Cart" : "Make Payment"}
          </button>

          <Link
            className="w-100"
            to={user == undefined ? `/house/${params.id}` : "/"}
          >
            <button
              className=" rounded border-0 fs-6 py-2 fw-bold text-white w-100"
              style={{
                backgroundColor: disable ? "rgb(162, 196, 181)" : "#3d9970",
                cursor: disable ? "not-allowed" : "pointer",
              }}
              onClick={() => {
                if (user == undefined && disable === false) {
                  alert(`User not logged in`);
                }
              }}
            >
              {whatFor === "Sale" ? "Buy Property Now." : "Rent Property Now."}
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default EachHoouse;
