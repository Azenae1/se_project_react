import React, { useState } from "react";
import Header from "../Header/Header";
//import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import "./App.css";
import { location, APIkey, defaultClothingItems } from "../../utils/constants";
import {
  getWeatherForecast,
  filterDataFromWeatherApi,
} from "../../utils/weatherAPI";

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState([]);
  const [activeModal, setActiveModal] = useState();
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeAllModals = () => {
    setActiveModal();
  };

  React.useEffect(() => {
    if (location.latitude && location.longtitude) {
      //api key
      getWeatherForecast(location, APIkey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header
          weatherData={weatherData}
          handleAddClick={() => setActiveModal("create")}
        />
        <Main
          weatherData={weatherData}
          cards={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

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
};

export default App;
