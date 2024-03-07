import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    // console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherType = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Name</h4>
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            required
            placeholder="Name"
            className="modal__input"
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Image</h4>
          <input
            type="url"
            name="link"
            minLength="2"
            required
            placeholder="Image URL"
            className="modal__input"
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p>Select the weather type:</p>
      <ul className="modal__list">
        <li>
          <input
            type="radio"
            id="hot"
            value="hot"
            name="temperature"
            onChange={handleWeatherType}
          />
          <label htmlFor="hot">Hot</label>
        </li>
        <li>
          <input
            type="radio"
            id="warm"
            value="warm"
            name="temperature"
            onChange={handleWeatherType}
          />
          <label htmlFor="warm">Warm</label>
        </li>
        <li>
          <input
            type="radio"
            id="cold"
            value="cold"
            name="temperature"
            onChange={handleWeatherType}
          />
          <label htmlFor="cold">Cold</label>
        </li>
      </ul>
    </ModalWithForm>
  );
};

export default AddItemModal;
