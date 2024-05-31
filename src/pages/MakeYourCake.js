import React from 'react'
import small_round_cake_base from "../images/small_round_cake_base.jpg"
import double_cake_base from "../images/double_cake_base.jpg";
import heart_cake_base from "../images/heart_cake_base.jpg"
import long_cake_base from "../images/long_cake_base.jpg"
import round_cake_base from "../images/round_cake_base.jpg"

import square_cake_base from "../images/square_cake_base.jpg"
import CakeProducts from './components/CakeProducts';
import "./MakeYourCake.css"
const MakeYourCake = () => {
  return (
    <div>
      <div className="top_container">
        <div className="showImgBig">
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <div className="left_bar"></div>
        <div className="base_shapes_container">
          <div>
            {" "}
            <CakeProducts
              img={small_round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={heart_cake_base}
              title="Mini Heart"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={long_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={square_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={small_round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={small_round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
          <div>
            {" "}
            <CakeProducts
              img={small_round_cake_base}
              title="Mini Standard"
              numberOfPeople="5"
              weight="1"
              price="12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeYourCake