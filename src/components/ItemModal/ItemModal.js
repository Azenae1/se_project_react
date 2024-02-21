import "./ItemModal.css";
import { useEffect, useRef } from "react";

const ItemModal = ({ selectedCard, onClose }) => {
  const itemModalRef = useRef();
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
        />
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__item-image"
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__item-weather">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
