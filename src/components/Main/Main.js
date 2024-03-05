import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, id }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    const tempF = weatherTemp?.temperature?.F;
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main>
      <WeatherCard
        id={id}
        weatherTemp={temp}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section id="cards" className="card__section">
        <div className="card__text">
          <div>
            Today is {temp}°{currentTemperatureUnit}{" "}
          </div>
          <div>/</div>
          <div> You may want to wear:</div>
        </div>
        <div className="cards">
          {filteredCards.map((card) => (
            <ItemCard key={card._id} card={card} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
