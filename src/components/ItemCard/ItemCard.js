const ItemCard = ({ card, onCardClick }) => {
  return (
    <div className="card__container">
      <div>
        <img
          src={card.link}
          className="card__image"
          onClick={() => onCardClick(card)}
          alt=""
        />
      </div>
      <div className="card__name"> {card.name} </div>
    </div>
  );
};

export default ItemCard;
