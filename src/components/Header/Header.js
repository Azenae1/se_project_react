import React from "react";
import "./Header.css";
import logoPath from "../../images/logo.svg";

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocalString("default", {
    month: "long",
    day: "numeric",
  });
  const userName = "Yury Bursian";
  const avatar = "";

  return (
    <header className="header">
      <div className="header__container">
        <img src={logoPath} alt="WTWR logo" className="header__logo" />
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__navigation">
        <nav className="navigation">
          <ul className="navigation__list">
            <li>
              <button onClick={handleAddClick} className="navigation__button">
                + Add clothes
              </button>
            </li>
            <li>
              <div className="navigation__link">
                {userName}
                {avatar ? (
                  <img
                    className="navigation__user"
                    src={avatar || avatarDefault}
                    alt="user avatar"
                  />
                ) : (
                  //takes username, toUpperCase, takes 1st letter
                  <span className="navigation__user navigation__user_type_none">
                    {userName?.toUpperCase().charAt(0) || ""}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
