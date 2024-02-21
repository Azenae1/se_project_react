import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo } from "react";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);
  console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);

  return (
    <main>
      <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />
      <section id="cards" className="card__section">
        <div className="card__text">
          <div>Today is {weatherTemp} </div>
          <div>/</div>
          <div> You may want to wear:</div>
        </div>
        <div className="cards">
          {filteredCards.map((card) => (
            <ItemCard card={card} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
