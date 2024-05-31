import React from 'react'
import "./Product.css"
const Product = (props) => {
  return (
    <div className='container_for_products'>
        <div className='product_img'><img src={props.img} alt="" /></div>
        <div><b>{props.title}</b></div>
        <div>{props.taste}</div>
        <div>{props.price}</div>
    </div>
  )
}

export default Product