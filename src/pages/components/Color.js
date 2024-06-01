import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import { useLocation } from 'react-router-dom';
import greenColorCircle from "../../images/coloredCircleImages/greenColorCircle.jpg"
import pinkColorCircle from "../../images/coloredCircleImages/pinkColorCircle.jpg";
import redColorCircle from "../../images/coloredCircleImages/redColorCircle.jpg";
import skyColorCircle from "../../images/coloredCircleImages/skyColorCircle.jpg";
import whiteColorCircle from "../../images/coloredCircleImages/whiteColorCircle.jpg";
const Color = () => {
  
     const location = useLocation();
     const { flavourPicked } = location.state || {};
     const { name } = location.state || {};

       const [showBigImage, setShowBigImage] = useState(flavourPicked);
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
         <div><img src={whiteColorCircle} alt="" /></div>
         <div><img src={skyColorCircle} alt="" /></div>
         <div><img src={pinkColorCircle} alt="" /></div>
         <div><img src={redColorCircle} alt="" /></div>
         <div><img src={greenColorCircle} alt="" /></div>
        </div>
      </div>
      <div>
        <button >Next</button>
      </div>
    </div>
  );
}

export default Color