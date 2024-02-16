import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./App.css";
import "../ItemCard/ItemCard.css";
import { defaultClothingItems } from "../../utils/constants";

function App() {
  return (
    <div>
      <Header />
      <main>
        <WeatherCard day={false} type="cloudy" />
        <section id="cards" className="card__section">
          <div className="card__text">
            <div>Today is 65°F </div>
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
