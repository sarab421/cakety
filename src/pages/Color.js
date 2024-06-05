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
        import("../images/colors/roundCircle/chocolate/green.jpg"),
        import("../images/colors/roundCircle/chocolate/pink.jpg"),
        import("../images/colors/roundCircle/chocolate/red.jpg"),
        import("../images/colors/roundCircle/chocolate/sky_blue.jpg"),
        import("../images/colors/roundCircle/chocolate/white.jpg"),
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
        import("../images/colors/roundCircle/chocolateInsidePink/green.jpg"),
        import("../images/colors/roundCircle/chocolateInsidePink/pink.jpg"),
        import("../images/colors/roundCircle/chocolateInsidePink/red.jpg"),
        import("../images/colors/roundCircle/chocolateInsidePink/sky_blue.jpg"),
        import("../images/colors/roundCircle/chocolateInsidePink/white.jpg"),
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
        import("../images/colors/roundCircle/cream/green.jpg"),
        import("../images/colors/roundCircle/cream/pink.jpg"),
        import("../images/colors/roundCircle/cream/red.jpg"),
        import("../images/colors/roundCircle/cream/sky_blue.jpg"),
        import("../images/colors/roundCircle/cream/white.jpg"),
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
        import("../images/colors/roundCircle/straberry/green.jpg"),
        import("../images/colors/roundCircle/straberry/pink.jpg"),
        import("../images/colors/roundCircle/straberry/red.jpg"),
        import("../images/colors/roundCircle/straberry/sky_blue.jpg"),
        import("../images/colors/roundCircle/straberry/white.jpg"),
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
        import("../images/colors/roundCircle/pista/green.jpg"),
        import("../images/colors/roundCircle/pista/pink.jpg"),
        import("../images/colors/roundCircle/pista/red.jpg"),
        import("../images/colors/roundCircle/pista/sky_blue.jpg"),
        import("../images/colors/roundCircle/pista/white.jpg"),
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
        import("../images/colors/roundCircle/fruits/green.jpg"),
        import("../images/colors/roundCircle/fruits/green.jpg"),
        import("../images/colors/roundCircle/fruits/red.jpg"),
        import("../images/colors/roundCircle/fruits/sky_blue.jpg"),
        import("../images/colors/roundCircle/fruits/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    }

    //heart category
    else if (name === "heart_chocolateFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/chocolate/green.jpg"),
        import("../images/colors/heart/chocolate/green.jpg"),
        import("../images/colors/heart/chocolate/red.jpg"),
        import("../images/colors/heart/chocolate/sky_blue.jpg"),
        import("../images/colors/heart/chocolate/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "heart_chocolateInsidePinkFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/ChocolateInsidePink/green.jpg"),
        import("../images/colors/heart/ChocolateInsidePink/pink.jpg"),
        import("../images/colors/heart/ChocolateInsidePink/red.jpg"),
        import("../images/colors/heart/ChocolateInsidePink/sky_blue.jpg"),
        import("../images/colors/heart/ChocolateInsidePink/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "heart_creamFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/cream/green.jpg"),
        import("../images/colors/heart/cream/pink.jpg"),
        import("../images/colors/heart/cream/red.jpg"),
        import("../images/colors/heart/cream/sky_blue.jpg"),
        import("../images/colors/heart/cream/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "heart_creamFruitFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/cream/green.jpg"),
        import("../images/colors/heart/cream/pink.jpg"),
        import("../images/colors/heart/cream/red.jpg"),
        import("../images/colors/heart/cream/sky_blue.jpg"),
        import("../images/colors/heart/cream/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "heart_PistaGreenFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/pista/green.jpg"),
        import("../images/colors/heart/pista/pink.jpg"),
        import("../images/colors/heart/pista/red.jpg"),
        import("../images/colors/heart/pista/sky_blue.jpg"),
        import("../images/colors/heart/pista/white.jpg"),
      ]);
      setImages({
        image1: green.default,
        image2: white.default,
        image3: pink.default,
        image4: sky_blue.default,
        image5: red.default,
      });
    } else if (name === "heart_strawberryFlavour") {
      const [green, pink, red, sky_blue, white] = await Promise.all([
        import("../images/colors/heart/shawberry/green.jpg"),
        import("../images/colors/heart/shawberry/pink.jpg"),
        import("../images/colors/heart/shawberry/red.jpg"),
        import("../images/colors/heart/shawberry/sky_blue.jpg"),
        import("../images/colors/heart/shawberry/white.jpg"),
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
