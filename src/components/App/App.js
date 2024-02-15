import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <WeatherCard day={false} type="cloudy" />
        <section id="cards">Cards</section>
      </main>
    </div>
  );
}

export default App;
