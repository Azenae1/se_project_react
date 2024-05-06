import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  onLogin,
  switchToRegister,
  isLoading,
  isOpen,
}) => {
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText={isLoading ? "Saving..." : "Log In"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Email</h4>
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
          <h4 className="modal__text">Password</h4>
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
    </ModalWithForm>
  );
};

export default LoginModal;
