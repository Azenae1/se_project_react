import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
    </label>
  );
};

export default ToggleSwitch;
