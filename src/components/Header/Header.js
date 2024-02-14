import "./Header.css";

const Header = () => {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo-group">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-group">
        <div>
          <button type="text">+Add new clothes</button>
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
