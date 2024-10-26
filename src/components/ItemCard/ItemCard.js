import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ card, onSelectCard, isLoggedIn, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked =
    currentUser && card.likes.some((id) => id === currentUser._id);
  const cardLikeButtonClass = `card__like-button ${
    isLiked ? "card__like-button_liked" : "card__like-button"
  } `;
  return (
    <div className="card__container">
      <img
        className="card__image"
        src={card.imageUrl || card.link}
        alt={card.name}
        onClick={() => onSelectCard(card)}
      />
      <p className="card__name">{card.name}</p>
      {isLoggedIn ? (
        <button
          type="button"
          className={cardLikeButtonClass}
          aria-label="Like this item"
          onClick={() => {
            onCardLike(card._id, isLiked);
          }}
        ></button>
      ) : (
        <button type="button" className="card__like-button_hidden"></button>
      )}
    </div>
  );
};

export default ItemCard;
