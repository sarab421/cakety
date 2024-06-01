import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import small_round_cake_base from "../images/cakebaseImages/small_round_cake_base.jpg";
import double_cake_base from "../images/cakebaseImages/double_cake_base.jpg";
import heart_cake_base from "../images/cakebaseImages/heart_cake_base.jpg";
import long_cake_base from "../images/cakebaseImages/long_cake_base.jpg";
import round_cake_base from "../images/cakebaseImages/round_cake_base.jpg";
import medium_heart_cake_base from "../images/cakebaseImages/medium_heart_cake_base.jpeg.jpg";
import square_cake_base from "../images/cakebaseImages/square_cake_base.jpg";
import small_square_cake_base from "../images/cakebaseImages/small_square_cake_base.jpeg.jpg";
import CakeProducts from "./components/CakeProducts";
import "./MakeYourCake.css";

const MakeYourCake = () => {
  const navigate = useNavigate(); 
  const [showBigImage, setShowBigImage] = useState(small_round_cake_base);

  const handleImageClick = (img) => {
    setShowBigImage(img);
  };

  const takeToFlavour = () => {
    if (showBigImage === small_round_cake_base) {
      navigate("/flavour", {
        state: { base_shape: small_round_cake_base, name: "small_round_cake_base" },
      });
    } else if (showBigImage === double_cake_base) {
      navigate("/flavour", {
        state: { base_shape: double_cake_base, name: "double_cake_base" },
      });
    } else if (showBigImage === heart_cake_base) {
      navigate("/flavour", {
        state: { base_shape: heart_cake_base, name: "heart_cake_base" },
      });
    } else if (showBigImage === long_cake_base) {
      navigate("/flavour", {
        state: { base_shape: long_cake_base, name: "long_cake_base" },
      });
    } else if (showBigImage === round_cake_base) {
      navigate("/flavour", {
        state: { base_shape: round_cake_base, name: "round_cake_base" },
      });
    } else if (showBigImage === medium_heart_cake_base) {
      navigate("/flavour", {
        state: {
          base_shape: medium_heart_cake_base,
          name: "medium_heart_cake_base",
        },
      });
    } else if (showBigImage === square_cake_base) {
      navigate("/flavour", {
        state: { base_shape: square_cake_base, name: "square_cake_base" },
      });
    }
  };

  return (
    <div>
      <div className="top_container">
        <div className="showImgBig">
          <img src={showBigImage} alt="" />
        </div>
      </div>
      <div>
        <div className="left_bar"></div>
        <div className="base_shapes_container">
          <div
            onClick={() => handleImageClick(small_round_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={small_round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div
            onClick={() => handleImageClick(heart_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={heart_cake_base}
              title="Mini Heart"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div
            onClick={() => handleImageClick(long_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={long_cake_base}
              title="Standard Cake"
              numberOfPeople="12"
              weight="1.5"
              price="12"
            />
          </div>
          <div
            onClick={() => handleImageClick(medium_heart_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={medium_heart_cake_base}
              title="Heart Cake"
              numberOfPeople="12"
              weight="1.5"
              price="12"
            />
          </div>
          <div
            onClick={() => handleImageClick(round_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={round_cake_base}
              title="Classic Round Cake"
              numberOfPeople="16"
              weight="1.8"
              price="16"
            />
          </div>
          <div
            onClick={() => handleImageClick(small_square_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={small_square_cake_base}
              title="Classic Square Cake"
              numberOfPeople="18"
              weight="2"
              price="16"
            />
          </div>
          <div
            onClick={() => handleImageClick(double_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={double_cake_base}
              title="Large Double Cake"
              numberOfPeople="20"
              weight="2.5"
              price="20"
            />
          </div>
          <div
            onClick={() => handleImageClick(square_cake_base)}
            className="cake-product"
          >
            <CakeProducts
              img={square_cake_base}
              title="Large Classic Cake"
              numberOfPeople="20"
              weight="2.5"
              price="12"
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={takeToFlavour}>Next</button>
      </div>
    </div>
  );
};

export default MakeYourCake;
