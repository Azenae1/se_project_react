import { useEffect, useRef, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./ItemModal.css";

const ItemModal = ({ selectedCard, onDelete, onClose }) => {
  const itemModalRef = useRef();
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__item_delete-button ${
    isOwn
      ? "modal__item_delete-button_visible"
      : "modal__item_delete-button_hidden"
  }`;
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (itemModalRef.current && !itemModalRef.current.contains(evt.target)) {
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
    <div className={`modal`}>
      <div className="modal__item-container" ref={itemModalRef}>
        <button
          type="button"
          onClick={onClose}
          className="modal__item_close-button"
          aria-label="Close popup window"
        />
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__item-image"
        />
        <div className="modal__wrap">
          <div className="modal__item-name">{selectedCard.name}</div>
          <div>
            <button
              className={itemDeleteButtonClassName}
              type="button"
              onClick={() => onDelete(selectedCard)}
            >
              Delete item
            </button>
          </div>
        </div>
        <div className="modal__item-weather">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
