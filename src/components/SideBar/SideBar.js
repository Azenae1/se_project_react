import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar_default.svg";

const SideBar = () => (
  <div className="sidebar">
    <img src={avatar} alt="sidebar avatar" className="sidebar__avatar" />
    <p className="sidebar__name">Yury</p>
  </div>
);

export default SideBar;
