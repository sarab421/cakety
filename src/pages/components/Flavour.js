import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import chocolateFlavour from "../../images/flavourImages/chocolateFlavour.jpg"
import chocolateInsidePinkFlavour from "../../images/flavourImages/chocolateInsidePinkFlavour.jpg"
import creamFruitFlavour from "../../images/flavourImages/creamFruitFlavour.jpg"
import PistaGreenFlavour from "../../images/flavourImages/PistaGreenFlavour.jpg"
import strawberryFlavour from "../../images/flavourImages/strawberryFlavour.jpg"
import creamFlavour from "../../images/flavourImages/creamFlavour.jpg"
import CakeProducts from './CakeProducts';
import { useNavigate } from "react-router-dom"; 
const Flavour = () => {
  const navigate =useNavigate();
  const location=useLocation();
    const { base_shape } = location.state || {};
    const { name } = location.state || {};
  const [showBigImage, setShowBigImage] = useState(base_shape);
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
          image6: roundStawberry.default
        });
      }
      //  else if (number === 2) {
      //   const []
      // }
      }
      const handleFlavourImageClick=(pickedFlavour)=>{
        if (name === "small_round_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "double_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "heart_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "long_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "round_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "medium_heart_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        } else if (name === "square_cake_base") {
          if (pickedFlavour === creamFlavour) {
            setShowBigImage(images.image3);
          } else if (pickedFlavour === chocolateFlavour) {
            setShowBigImage(images.image1);
          } else if (pickedFlavour === chocolateInsidePinkFlavour) {
            setShowBigImage(images.image2);
          } else if (pickedFlavour === PistaGreenFlavour) {
            setShowBigImage(images.image5);
          } else if (pickedFlavour === creamFruitFlavour) {
            setShowBigImage(images.image4);
          } else if (pickedFlavour === strawberryFlavour) {
            setShowBigImage(images.image6);
          }
        }
      }
    const takeToColor=()=>{

   if (showBigImage === images.image1) {
     navigate("/color", {
       state: {
         flavourPicked: images.image1,
         name: "small_round_chocolateFlavour",
       },
     });
   } else if (showBigImage === images.image2) {
     navigate("/color", {
       state: {
         flavourPicked: images.image2,
         name: "small_round_chocolateInsidePinkFlavour",
       },
     });
   } else if (showBigImage === images.image3) {
     navigate("/color", {
       state: {
         flavourPicked: images.image3,
         name: "small_round_creamFlavour",
       },
     });
   } else if (showBigImage === images.image4) {
     navigate("/color", {
       state: {
         flavourPicked: images.image4,
         name: "small_round_creamFruitFlavour",
       },
     });
   } else if (showBigImage === images.image5) {
     navigate("/color", {
       state: {
         flavourPicked: images.image5,
         name: "small_round_PistaGreenFlavour",
       },
     });
   } else if (showBigImage === images.image6) {
     navigate("/color", {
       state: {
         flavourPicked: images.image6,
         name: "small_round_strawberryFlavour",
       },
     });
   } 
    }

      useEffect(() => {
        loadImages();
      }, [loadImages]);
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
              onClick={() => handleFlavourImageClick(creamFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={creamFlavour}
                title="Mini Standard"
                numberOfPeople="5"
                weight="1"
                price="12"
              />
            </div>
            <div
              onClick={() => handleFlavourImageClick(chocolateFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={chocolateFlavour}
                title="Mini Standard"
                numberOfPeople="5"
                weight="1"
                price="12"
              />
            </div>
            <div
              onClick={() => handleFlavourImageClick(chocolateInsidePinkFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={chocolateInsidePinkFlavour}
                title="Mini Heart"
                numberOfPeople="5"
                weight="1"
                price="12"
              />
            </div>
            <div
              onClick={() => handleFlavourImageClick(PistaGreenFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={PistaGreenFlavour}
                title="Standard Cake"
                numberOfPeople="12"
                weight="1.5"
                price="12"
              />
            </div>
            <div
              onClick={() => handleFlavourImageClick(creamFruitFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={creamFruitFlavour}
                title="Heart Cake"
                numberOfPeople="12"
                weight="1.5"
                price="12"
              />
            </div>
            <div
              onClick={() => handleFlavourImageClick(strawberryFlavour)}
              className="cake-product"
            >
              {" "}
              <CakeProducts
                img={strawberryFlavour}
                title="Classic Round Cake"
                numberOfPeople="16"
                weight="1.8"
                price="16"
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={takeToColor}>Next</button>
        </div>
      </div>
    );
}

export default Flavour