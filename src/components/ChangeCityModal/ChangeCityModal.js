import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ChangeCityModal = ({
  isOpen,
  handleCloseModal,
  handleCityChange,
  isLoading,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [city, setCity] = useState(currentUser.city ?? "");

  const validateForm = () => {
    return city.trim().length > 1;
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleCityChange(city);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Change City"
      buttonText={isLoading ? "Saving..." : "Change location"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      onInputChange={validateForm}
    >
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">City*</h4>
          <input
            className="modal__input"
            name="city"
            type="text"
            placeholder="Enter city name"
            id="city"
            required
            onChange={handleInputChange}
            value={city}
            minLength="2"
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default ChangeCityModal;
