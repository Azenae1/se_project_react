import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

const Main = () => {
  const weatherTemp = "89°F";
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
          {defaultClothingItems.map((card) => (
            <ItemCard card={card} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
