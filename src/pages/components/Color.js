import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { useLocation } from 'react-router-dom';
import greenColorCircle from "../../images/coloredCircleImages/greenColorCircle.jpg"
import pinkColorCircle from "../../images/coloredCircleImages/pinkColorCircle.jpg";
import redColorCircle from "../../images/coloredCircleImages/redColorCircle.jpg";
import skyColorCircle from "../../images/coloredCircleImages/skyColorCircle.jpg";
import whiteColorCircle from "../../images/coloredCircleImages/whiteColorCircle.jpg";
import "./Color.css"
const Color = () => {
  
     const location = useLocation();
     const { flavourPicked } = location.state || {};
     const { name } = location.state || {};

       const [showBigImage, setShowBigImage] = useState(flavourPicked);
      const [images, setImages] = useState({});

const loadImages = async () => {
  if (name === "small_round_cake_base") {
    const [
      roundChocolateFlavour,
      roundChocolateInsidePink,
      roundCream,
      roundInsideFruit,
      roundPistaGreen,
      roundStawberry,
    ] = await Promise.all([
      import("../../images/RoundFlavour/roundChocolateFlavour.jpg"),
      import("../../images/RoundFlavour/roundChocolateInsidePink.jpg"),
      import("../../images/RoundFlavour/roundCream.jpg"),
      import("../../images/RoundFlavour/roundInsideFruit.jpg"),
      import("../../images/RoundFlavour/roundPistaGreen.jpg"),
      import("../../images/RoundFlavour/roundStawberry.jpg"),
    ]);
    setImages({
      image1: roundChocolateFlavour.default,
      image2: roundChocolateInsidePink.default,
      image3: roundCream.default,
      image4: roundInsideFruit.default,
      image5: roundPistaGreen.default,
      image6: roundStawberry.default,
    });
  }
  //  else if (number === 2) {
  //   const []
  // }
};





         useEffect(() => {
           loadImages();
         }, []);
  return (
    <div className="color_file_main_container">
      <div className="top_container">
        <div className="showImgBig">
          <img src={showBigImage} alt="" />
        </div>
      </div>
      <div>
        <div className="left_bar_in_color"></div>
      
        <div className="base_shapes_container ">
          <div className="colorImagesDiv color_item1">
            <img src={whiteColorCircle} alt="" />
          </div>
          <div className="colorImagesDiv color_item2">
            <img src={skyColorCircle} alt="" />
          </div>
          <div className="colorImagesDiv color_item3">
            <img src={pinkColorCircle} alt="" />
          </div>
          <div className="colorImagesDiv color_item4">
            <img src={redColorCircle} alt="" />
          </div>
          <div className="colorImagesDiv color_item5">
            <img src={greenColorCircle} alt="" />
          </div>
        </div>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Color