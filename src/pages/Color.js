import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import greenColorCircle from "../images/coloredCircleImages/greenColorCircle.jpg";
import pinkColorCircle from "../images/coloredCircleImages/pinkColorCircle.jpg";
import redColorCircle from "../images/coloredCircleImages/redColorCircle.jpg";
import skyColorCircle from "../images/coloredCircleImages/skyColorCircle.jpg";
import whiteColorCircle from "../images/coloredCircleImages/whiteColorCircle.jpg";
import "./Color.css";

const Color = () => {
  const location = useLocation();
  const { flavourPicked } = location.state || {};
  const { name } = location.state || {};

  const [showBigImage, setShowBigImage] = useState(flavourPicked);
  const [images, setImages] = useState({});
console.log("Flavour is: ",name)
  const loadImages = async () => {
    if (name === "small_round_chocolateFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/chocolate/green.jpg"),
        import("../images/colors/chocolate/pink.jpg"),
        import("../images/colors/chocolate/red.jpg"),
        import("../images/colors/chocolate/sky_blue.jpg"),
        import("../images/colors/chocolate/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "small_round_chocolateInsidePinkFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/chocolateInsidePink/green.jpg"),
        import("../images/colors/chocolateInsidePink/pink.jpg"),
        import("../images/colors/chocolateInsidePink/red.jpg"),
        import("../images/colors/chocolateInsidePink/sky_blue.jpg"),
        import("../images/colors/chocolateInsidePink/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "small_round_creamFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/cream/green.jpg"),
        import("../images/colors/cream/pink.jpg"),
        import("../images/colors/cream/red.jpg"),
        import("../images/colors/cream/green.jpg"), // i will change it later
        import("../images/colors/cream/pink.jpg"), // i will change it later
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "small_round_strawberryFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/straberry/green.jpg"),
        import("../images/colors/straberry/pink.jpg"),
        import("../images/colors/straberry/red.jpg"),
        import("../images/colors/straberry/sky_blue.jpg"),
        import("../images/colors/straberry/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "small_round_PistaGreenFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/pista/green.jpg"),
        import("../images/colors/pista/green.jpg"), //will change it later
        import("../images/colors/pista/red.jpg"),
        import("../images/colors/pista/sky_blue.jpg"),
        import("../images/colors/pista/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "small_round_creamFruitFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/fruits/green.jpg"),
        import("../images/colors/fruits/green.jpg"), 
        import("../images/colors/fruits/red.jpg"),
        import("../images/colors/fruits/sky_blue.jpg"),
        import("../images/colors/fruits/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    }
  };

  const handleColorImageClick = (colorPicked) => {
    if (name === "small_round_chocolateFlavour") {
      if (colorPicked === whiteColorCircle) {
        setShowBigImage(images.image2);
      } else if (colorPicked === skyColorCircle) {
        setShowBigImage(images.image4);
      } else if (colorPicked === pinkColorCircle) {
        setShowBigImage(images.image3);
      } else if (colorPicked === redColorCircle) {
        setShowBigImage(images.image5);
      } else if (colorPicked === greenColorCircle) {
        setShowBigImage(images.image1);
      }
    } else if (name === "small_round_chocolateInsidePinkFlavour") {
      if (colorPicked === whiteColorCircle) {
        setShowBigImage(images.image2);
      } else if (colorPicked === skyColorCircle) {
        setShowBigImage(images.image4);
      } else if (colorPicked === pinkColorCircle) {
        setShowBigImage(images.image3);
      } else if (colorPicked === redColorCircle) {
        setShowBigImage(images.image5);
      } else if (colorPicked === greenColorCircle) {
        setShowBigImage(images.image1);
      }
    } else if (name === "small_round_creamFruitFlavour") {
      if (colorPicked === whiteColorCircle) {
        setShowBigImage(images.image2);
      } else if (colorPicked === skyColorCircle) {
        setShowBigImage(images.image4);
      } else if (colorPicked === pinkColorCircle) {
        setShowBigImage(images.image3);
      } else if (colorPicked === redColorCircle) {
        setShowBigImage(images.image5);
      } else if (colorPicked === greenColorCircle) {
        setShowBigImage(images.image1);
      }
    }
    
  else if (name === "small_round_PistaGreenFlavour") {
    if (colorPicked === whiteColorCircle) {
      setShowBigImage(images.image2);
    } else if (colorPicked === skyColorCircle) {
      setShowBigImage(images.image4);
    } else if (colorPicked === pinkColorCircle) {
      setShowBigImage(images.image3);
    } else if (colorPicked === redColorCircle) {
      setShowBigImage(images.image5);
    } else if (colorPicked === greenColorCircle) {
      setShowBigImage(images.image1);
    }
  }

  
    else if (name === "small_round_strawberryFlavour") {
      if (colorPicked === whiteColorCircle) {
        setShowBigImage(images.image2);
      } else if (colorPicked === skyColorCircle) {
        setShowBigImage(images.image4);
      } else if (colorPicked === pinkColorCircle) {
        setShowBigImage(images.image3);
      } else if (colorPicked === redColorCircle) {
        setShowBigImage(images.image5);
      } else if (colorPicked === greenColorCircle) {
        setShowBigImage(images.image1);
      }
    }
  };

  useEffect(() => {
    loadImages();
  }, [name]);

  return (
    <div className="color_file_main_container">
      <div className="top_container">
        <div className="showImgBig">
          <img src={showBigImage} alt="" />
        </div>
      </div>
      <div>
        <div className="left_bar_in_color"></div>
        <div className="color_shapes_container">
          <div
            className="colorImagesDiv color_item1"
            onClick={() => handleColorImageClick(whiteColorCircle)}
          >
            <img src={whiteColorCircle} alt="" />
          </div>
          <div
            className="colorImagesDiv color_item2"
            onClick={() => handleColorImageClick(skyColorCircle)}
          >
            <img src={skyColorCircle} alt="" />
          </div>
          <div
            className="colorImagesDiv color_item3"
            onClick={() => handleColorImageClick(pinkColorCircle)}
          >
            <img src={pinkColorCircle} alt="" />
          </div>
          <div
            className="colorImagesDiv color_item4"
            onClick={() => handleColorImageClick(redColorCircle)}
          >
            <img src={redColorCircle} alt="" />
          </div>
          <div
            className="colorImagesDiv color_item5"
            onClick={() => handleColorImageClick(greenColorCircle)}
          >
            <img src={greenColorCircle} alt="" />
          </div>
        </div>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Color;
