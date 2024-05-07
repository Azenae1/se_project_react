import { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
// import avatar from "../../images/avatar_default.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function getDate() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return <span>{currentDate}</span>;
}

const Header = ({
  onCreateModal,
  onRegister,
  onLogin,
  location,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo-group">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="date">{getDate()},</div>
        <div>{location}</div>
      </div>
      <div className="header__avatar-group">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__button"
              >
                +Add clothes
              </button>
            </div>
            <NavLink to="/profile">
              <h3 className="header__link">{currentUser.name}</h3>
            </NavLink>
            <div>
              <img
                className="header__avatar-logo"
                src={currentUser.avatar}
                alt="avatar"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                type="text"
                onClick={onRegister}
                className="header__button"
              >
                Sign Up
              </button>
            </div>
            <div>
              <button type="text" onClick={onLogin} className="header__button">
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
