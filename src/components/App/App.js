import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="weather__card" id="weather">
          <div className="weather__temp">75°F</div>
          <img src="images/day/cloudy.svg" alt="" />
        </section>
        <section id="cards">Cards</section>
      </main>
    </div>
  );
}

export default App;
