import ItemCard from "../ItemCard/ItemCard";
import "../Profile/Profile.css";
import "../ClothesSection/ClothesSection.css";

const ClothesSection = ({
  cards,
  onCreateModal,
  onSelectCard,
  onCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="clothes__section">
      <div className="clothes__section-items">
        <p className="clothes__title">Your items</p>
        <button className="clothes__button" onClick={onCreateModal} type="text">
          + Add New
        </button>
      </div>
      <ul className="clothes__items">
        {cards.map((card) => {
          return (
            <ItemCard
              key={card._id}
              card={card}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
