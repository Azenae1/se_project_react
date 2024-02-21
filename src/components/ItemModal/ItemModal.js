import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__item-container">
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
