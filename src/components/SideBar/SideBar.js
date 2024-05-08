import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import avatar from "../../images/avatar_default.svg";

const SideBar = ({ onEditModal }) => {
  const { currentUser } = useContext(CurrentUserContext);
  <div className="sidebar">
    <img
      src={currentUser.avatar}
      alt="sidebar avatar"
      className="sidebar__avatar"
    />
    <h3 className="sidebar__name" type="text">
      {currentUser.name}
    </h3>
    <p className="sidebar__profile-data" onClick={onEditModal}>
      Change profile data
    </p>
    <p className="sidebar__logout">Log out</p>
  </div>;
};

export default SideBar;
