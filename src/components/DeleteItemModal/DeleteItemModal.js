import { useEffect, useRef } from "react";
import "../ModalWithForm/ModalWithForm.css";

function DeleteItemModal({
  isOpen,
  name,
  onClose,
  handleDelete,
  handleCancel,
  onClick,
}) {
  const delModalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (delModalRef.current && !delModalRef.current.contains(evt.target)) {
        onClose();
      }
    };

    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div
      className={
        isOpen ? `modal modal_type_${name}` : `modal_type_${name} modal_hidden`
      }
      onClick={onClick}
    >
      <div className="modal__container modal__delete-container">
        <button
          onClick={onClose}
          type="button"
          className="modal__item_close-button"
        ></button>
        <h3 className="modal__delete-text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          type="button"
          className="modal__confirmation modal__item_delete-button_visible"
          onClick={handleDelete}
        >
          Yes, delete item
        </button>
        <button type="button" className="modal__cancel" onClick={handleCancel}>
          Cancel
        </button>
        {/* <button className="item__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button> */}
      </div>
    </div>
  );
}

export default DeleteItemModal;
