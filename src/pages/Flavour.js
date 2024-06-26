import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import chocolateFlavour from "../images/flavourImages/chocolateFlavour.jpg";
import chocolateInsidePinkFlavour from "../images/flavourImages/chocolateInsidePinkFlavour.jpg"
import creamFruitFlavour from "../images/flavourImages/creamFruitFlavour.jpg"
import PistaGreenFlavour from "../images/flavourImages/PistaGreenFlavour.jpg"
import strawberryFlavour from "../images/flavourImages/strawberryFlavour.jpg"
import creamFlavour from "../images/flavourImages/creamFlavour.jpg"
import CakeProducts from './components/CakeProducts';
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
          import("../images/Flavour/RoundFlavour/roundChocolateFlavour.jpg"),
          import("../images/Flavour/RoundFlavour/roundChocolateInsidePink.jpg"),
          import("../images/Flavour/RoundFlavour/roundCream.jpg"),
          import("../images/Flavour/RoundFlavour/roundInsideFruit.jpg"),
          import("../images/Flavour/RoundFlavour/roundPistaGreen.jpg"),
          import("../images/Flavour/RoundFlavour/roundStawberry.jpg"),
        ]);
        setImages({
          image1: roundChocolateFlavour.default,
          image2: roundChocolateInsidePink.default,
          image3: roundCream.default,
          image4: roundInsideFruit.default,
          image5: roundPistaGreen.default,
          image6: roundStawberry.default,
        });
      } else if (name === "heart_cake_base") {
        const [
          heartChocolateFlavour,
          heartChocolateInsidePink,
          heartCream,
          heartInsideFruit,
          heartPistaGreen,
          heartStawberry,
        ] = await Promise.all([
          import("../images/Flavour/HeartFlavour/chocolateHeartFlavour.jpg"),
          import("../images/Flavour/HeartFlavour/chocolatePinkInsideFlavour.jpg"),
          import("../images/Flavour/HeartFlavour/creamHeartFlavour.jpg"),
          import("../images/Flavour/HeartFlavour/FruitInsideFlavour.jpg"),
          import("../images/Flavour/HeartFlavour/pistaGreenHeart.jpg"),
          import("../images/Flavour/HeartFlavour/StawberryFlavour.jpg"),
        ]);
        setImages({
          image1: heartChocolateFlavour.default,
          image2: heartChocolateInsidePink.default,
          image3: heartCream.default,
          image4: heartInsideFruit.default,
          image5: heartPistaGreen.default,
          image6: heartStawberry.default,
        });
      }
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
        }  else if (name === "square_cake_base") {
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

  if (name === "small_round_cake_base") {
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
  } else if (name === "heart_cake_base") {
    if (showBigImage === images.image1) {
      navigate("/color", {
        state: {
          flavourPicked: images.image1,
          name: "heart_chocolateFlavour",
        },
      });
    } else if (showBigImage === images.image2) {
      navigate("/color", {
        state: {
          flavourPicked: images.image2,
          name: "heart_chocolateInsidePinkFlavour",
        },
      });
    } else if (showBigImage === images.image3) {
      navigate("/color", {
        state: {
          flavourPicked: images.image3,
          name: "heart_creamFlavour",
        },
      });
    } else if (showBigImage === images.image4) {
      navigate("/color", {
        state: {
          flavourPicked: images.image4,
          name: "heart_creamFruitFlavour",
        },
      });
    } else if (showBigImage === images.image5) {
      navigate("/color", {
        state: {
          flavourPicked: images.image5,
          name: "heart_PistaGreenFlavour",
        },
      });
    } else if (showBigImage === images.image6) {
      navigate("/color", {
        state: {
          flavourPicked: images.image6,
          name: "heart_strawberryFlavour",
        },
      });
    }
  }
    
  
  
  }

     useEffect(()=>{
      loadImages();
     },[]);
      
     
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