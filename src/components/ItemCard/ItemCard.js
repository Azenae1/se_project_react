import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ card, onSelectCard, isLoggedIn, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = card.likes.some((id) => id === currentUser._id);
  const cardLikeButtonClass = `card__like-button ${
    isLiked ? "card__like-button_liked" : "card__like-button"
  } `;
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
      {isLoggedIn ? (
        <button
          type="button"
          className={cardLikeButtonClass}
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
