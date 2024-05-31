import React from 'react'
import logo from "../images/logo.jpeg.jpg"
import "./Header.css"
const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_image">
        <img src={logo} alt="" />
      </div>
      <div className="search-container">
        <span class="search-icon">&#128269;</span>
        <input
          type="text"
          placeholder="What occasion are you having"
          className="search_bar"
        />
      </div>
    </div>
  );
}

export default Header