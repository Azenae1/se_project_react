import { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  handleEditProfile,
  isLoading,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name ?? "");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar ?? "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfile(name, avatar);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Name*</h4>
          <input
            className="modal__input"
            name="name"
            type="text"
            placeholder="Name"
            id="name"
            required
            onChange={handleNameChange}
            value={name}
            minLength="2"
            maxLength="30"
          />
        </label>
      </div>
      <div className="modal__form-field">
        <label>
          <h4 className="modal__text">Avatar URL*</h4>
          <input
            className="modal__input"
            name="Avatar URL"
            type="text"
            placeholder="Avatar URL"
            id="avatar-URL"
            required
            onChange={handleAvatarChange}
            value={avatar}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
