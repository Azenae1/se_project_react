import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar_default.svg";

function getDate() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return <span>{currentDate}</span>;
}

const Header = ({ onCreateModal, location }) => {
  return (
    <header className="header">
      <div className="header__logo-group">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="date">{getDate()},</div>
        <div>{location}</div>
      </div>
      <div className="header__avatar-group">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            +Add clothes
          </button>
        </div>
        <h3>Yury</h3>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
