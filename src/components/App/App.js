import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./App.css";
import "../ItemCard/ItemCard.css";
import { defaultClothingItems } from "../../utils/constants";

function App() {
  const weatherTemp = "69°F";
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default App;
