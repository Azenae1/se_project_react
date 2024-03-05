import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  // console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "C"
            ? "switch__slider switch__slider_C"
            : "switch__slider switch__slider_F"
        }
      ></span>
      <p
        className={`switch__temp_C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp_F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
    </label>
  );
};

export default ToggleSwitch;
