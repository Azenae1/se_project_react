import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTempUnit, handleToggleSwitch] = useState("C");
  const handleChange = (e) => {
    if (currentTempUnit === "C") handleToggleSwitch("F");
    if (currentTempUnit === "F") handleToggleSwitch("C");
  };
  console.log(currentTempUnit);
  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider_F"
            : "switch__slider switch__slider_C"
        }
      ></span>
      <p
        className={`switch__temp_C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp_F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
    </label>
  );
};

export default ToggleSwitch;
