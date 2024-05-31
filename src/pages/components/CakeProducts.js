import React from 'react'
import "./CakeProducts.css"
const CakeProducts = (props) => {
  return (
    <div className='single_cake_product_container'>
      <div className='cakeBaseImg'>
        <img src={props.img} alt="" />
      </div>
      <div>
        <b>{props.title}</b>
      </div>
      <div>Good for {props.numberOfPeople} people</div>
      <div>{props.weight}kg</div>
      <div>{props.price} IQD</div>
    </div>
  );
}

export default CakeProducts