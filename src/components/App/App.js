import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import {
  getForecastWeather,
  parseLocation,
  parseWeatherData,
  parseWeatherId,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log(data);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const city = parseLocation(data);
        setLocation(city);
        const image = `str${parseWeatherId(data)}`;
        setWeatherIcon(image);
        // console.log(image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(currentTemperatureUnit);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} location={location} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={weatherTemp}
              onSelectCard={handleSelectedCard}
              id={weatherIcon}
            />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New Garment"
            buttonText="Add Garment"
            onClose={handleCloseModal}
          >
            <div className="modal__form-field">
              <label>
                <h4 className="modal__text">Name</h4>
                <input
                  type="text"
                  name="name"
                  minLength="1"
                  maxLength="30"
                  required
                  placeholder="Name"
                  className="modal__input"
                />
              </label>
            </div>
            <div className="modal__form-field">
              <label>
                <h4 className="modal__text">Image</h4>
                <input
                  type="url"
                  name="link"
                  minLength="2"
                  required
                  placeholder="Image URL"
                  className="modal__input"
                />
              </label>
            </div>
            <p>Select the weather type:</p>
            <ul className="modal__list">
              <li>
                <input type="radio" id="hot" value="hot" name="temperature" />
                <label htmlFor="hot">Hot</label>
              </li>
              <li>
                <input type="radio" id="warm" value="warm" name="temperature" />
                <label htmlFor="warm">Warm</label>
              </li>
              <li>
                <input type="radio" id="cold" value="cold" name="temperature" />
                <label htmlFor="cold">Cold</label>
              </li>
            </ul>
          </ModalWithForm>
        )}

        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
