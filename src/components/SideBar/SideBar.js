import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import avatar from "../../images/avatar_default.svg";

const SideBar = ({ onEditModal, onLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img
        src={currentUser.avatar}
        alt="sidebar avatar"
        className="sidebar__avatar"
      />
      <h3 className="sidebar__name" type="text">
        {currentUser.name}
      </h3>
      <button className="sidebar__button" onClick={onEditModal}>
        Change profile data
      </button>
      <button className="sidebar__button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
