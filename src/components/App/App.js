import React, { useState } from "react";
import Header from "../Header/Header";
//import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import "./App.css";
import { location, APIkey, defaultClothingItems } from "../../utils/constants";
import {
  getForecastWeather,
  parseLocation,
  parseWeatherData,
  parseWeatherId,
} from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  // console.log(weatherIcon);

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

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} location={location} />
      <Main
        weatherTemp={weatherTemp}
        onSelectCard={handleSelectedCard}
        id={weatherIcon}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="new garment"
          name="new card"
          onClose={closeAllModals}
        >
          <label>
            <input
              type="text"
              name="name"
              id="garment-name"
              className="modal__input modal__input_type_name"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              required
            ></input>
            <span className="modal__error" id="garment-name-error"></span>
          </label>
          <label>
            <input
              type="url"
              name="link"
              id="garment-link"
              className="modal__input modal__input_type_url"
              placeholder="Image URL"
              required
            ></input>
            <span className="modal__error" id="garment-url-error"></span>
          </label>
          <p>Select the weather type:</p>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input
                type="radio"
                id="choiceHot"
                name="weatherType"
                value="hot"
              />
              <label className="modal__label_radio" htmlFor="choiceHot">
                Hot
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="choiceWarm"
                name="weatherType"
                value="warm"
              />
              <label className="modal__label_radio" htmlFor="choiceWarm">
                Warm
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="choiceCold"
                name="weatherType"
                value="cold"
              />
              <label className="modal__label_radio" htmlFor="choiceCold">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal card={selectedCard} onClose={closeAllModals} />
      )}
    </div>
  );
}

export default App;
