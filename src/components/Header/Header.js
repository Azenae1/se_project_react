import "./Header.css";

const Header = ({ onCreateModal, location }) => {
  return (
    <header className="header">
      <div className="header__logo-group">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
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
        <div>Yury</div>
        <div>
          <img src="/images/avatar_default.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
