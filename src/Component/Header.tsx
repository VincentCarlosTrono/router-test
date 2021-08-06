
import React, { useContext, useState } from "react";
import { AppContext } from "../ContextAPI/appContext";
import "./Header.css";

export const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState<Boolean>(false);


export const Header = () => {
  const { darkmode, setDarkmode } = useContext(AppContext);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  };


  return (
    <div className={`header grid-container ${darkmode && "dark"}`}>
      <div className="header-line container">
        <h1> Tasty</h1>
        <div className="header-list">
          <ul>
            <li>
              <a href="#Home">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Services">SERVICES</a>
            </li>
            <li>
              <a href="#Menu">MENU</a>
            </li>
            <li>
              <a href="#Contact">CONTACT US</a>
            </li>

            <button
              onClick={() => setIsLoggedin(!isLoggedin)}
              className="h-button"
            >
              {isLoggedin ? (
                <box-icon name="sun"></box-icon>
              ) : (
                <box-icon
                  type="solid"
                  name="moon"
                  className="dark-theme"
                ></box-icon>
              )}
              <div className="header-icon"></div>
            </button>
            <div className="header-icon" onClick={handleDarkmode}>
              {darkmode ? (
                <box-icon type="solid" name="sun" color="white"></box-icon>
              ) : (
                <box-icon type="solid" name="moon"></box-icon>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
    
  )
};
export default Header;
