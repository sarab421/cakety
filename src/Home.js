import React from 'react'
import Header from "./components/Header";
import { Link } from 'react-router-dom';
import birthdayCakeIcon from "./images/birthday_cake_icon.png"
import Product from './components/Product';
import tempImage from "./images/tempImage.png"
import makeYourOwnCakeImg from "./images/makeYourOwnCakeImage.jpg"
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Header />
      <div className="collections">
        <div className="make_your_own_cake_img">
          <Link to="/makeYourCake">
            <img src={makeYourOwnCakeImg} alt="" />
          </Link>
        </div>
        <div className="collection">
          <div className="collection_name">
            <div>
              <div className="collection_img_name_container">
                <div className="collection_name_img">
                  <img src={birthdayCakeIcon} alt="" />
                </div>
                <div>
                  <b>Birthday collection</b>
                </div>
              </div>
            </div>
            {/* <div>
              <Link to={}>see all</Link>
            </div> */}
          </div>
          <div className="product_container">
            <div>
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
          </div>
        </div>

        {/* Graduation Collection  */}
        <div className="collection">
          <div className="collection_name">
            <div>
              <div className="collection_img_name_container">
                <div className="collection_name_img">
                  <img src={birthdayCakeIcon} alt="" />
                </div>
                <div>
                  <b>Graduation collection</b>
                </div>
              </div>
            </div>
            <div>
              {/* <div>
              <Link to={}>see all</Link>
            </div> */}
            </div>
          </div>
          <div className="product_container">
            <div>
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
            <div>
              {" "}
              <Product
                img={tempImage}
                title="Pink Comic"
                taste="Vanilla"
                price="25 IQD"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home