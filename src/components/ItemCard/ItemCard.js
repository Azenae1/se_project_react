import "./ItemCard.css";

const ItemCard = ({ card }) => {
  return (
    <div>
      <div>
        <img className="card__image" src={card.link} alt={card.name} />
      </div>
      <div className="card__name">{card.name}</div>
    </div>
  );
};

export default ItemCard;
