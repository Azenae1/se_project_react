import "./ItemCard.css";

const ItemCard = ({ card, onSelectCard }) => {
  return (
    <div className="card__container">
      <div>
        <img
          className="card__image"
          src={card.imageUrl || card.link}
          alt={card.name}
          onClick={() => onSelectCard(card)}
        />
      </div>
      <p className="card__name">{card.name}</p>
    </div>
  );
};

export default ItemCard;
