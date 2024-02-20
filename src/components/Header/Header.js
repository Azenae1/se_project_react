import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo-group">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-group">
        <div>
          <button type="text" onClick={onCreateModal}>
            +Add new clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img src="/images/avatar_default.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
