import React from "react";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo } from "react";

const Main = ({ weatherTemp, onSelectCard, id }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main>
      <WeatherCard id={id} weatherTemp={weatherTemp} />
      <section id="cards" className="card__section">
        <div className="card__text">
          <div>Today is {weatherTemp}°F </div>
          <div>/</div>
          <div> You may want to wear:</div>
        </div>
        <div className="cards">
          {filteredCards.map((card) => (
            <ItemCard key={card._id} card={card} onSelectCard={onSelectCard} />
          ))}
        </div>
        <ul className="main__items">
          {cards
            .filter((card) => card.weather === weatherType())
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                card={filteredCard}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
