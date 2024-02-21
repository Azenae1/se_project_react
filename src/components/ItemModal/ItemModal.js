const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <img src={selectedCard.link} alt="" />
        <div>{selectedCard.name}</div>
        <div>Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
