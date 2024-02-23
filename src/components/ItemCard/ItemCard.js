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
      <p className="card__name">{card.name}</p>
    </div>
  );
};

export default ItemCard;
