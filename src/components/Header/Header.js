import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar_default.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

function getDate() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return <span>{currentDate}</span>;
}

const Header = ({ onCreateModal, onRegister, onLogin, location }) => {
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
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            +Add clothes
          </button>
        </div>
        <div>
          <button type="text" onClick={onRegister} className="header__button">
            Sign Up
          </button>
        </div>
        <div>
          <button type="text" onClick={onLogin} className="header__button">
            Log In
          </button>
        </div>
        <Link to="/profile" className="header__link">
          <h3>Yury</h3>
        </Link>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
