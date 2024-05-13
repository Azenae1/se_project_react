import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onRegister,
  switchToLogin,
  isLoading,
  isOpen,
}) => {
  const validateForm = () => {
    const isAvatarValid = /^(ftp|http|https):\/\/[^ "]+$/.test(avatar);
    return (
      email.trim() !== "" &&
      password.trim().length >= 6 &&
      name.trim().length >= 2 &&
      isAvatarValid
    );
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, password, email, avatar });
  };

  return (
    <ModalWithForm
      title="Registration"
      buttonText={isLoading ? "Saving..." : "Sign up"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onInputChange={validateForm}
    >
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Email*</h4>
          <input
            type="email"
            name="email"
            value={email}
            minLength="1"
            maxLength="30"
            required
            placeholder="Email"
            className="modal__input"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Password*</h4>
          <input
            type="password"
            name="password"
            value={password}
            minLength="6"
            required
            placeholder="Password"
            className="modal__input"
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Name*</h4>
          <input
            type="text"
            name="name"
            value={name}
            minLength="2"
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
          <h4 className="modal__text">Avatar URL*</h4>
          <input
            type="url"
            name="avatar url"
            value={avatar}
            required
            placeholder="Avatar URL"
            className="modal__input"
            onChange={handleAvatarChange}
          />
        </label>
      </div>
      <p className="modal__form_switch-button" onClick={switchToLogin}>
        or Log in
      </p>
    </ModalWithForm>
  );
};

export default RegisterModal;
