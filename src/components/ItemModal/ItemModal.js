const ItemModal = ({ selectedCard }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__container">
        <img src={selectedCard.link} alt="" />
        <div>Item name</div>
        <div>Weather type</div>
      </div>
    </div>
  );
};

export default ItemModal;
