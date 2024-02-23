import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
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
        const weatherIcon = `str${parseWeatherId(data)}`;
        console.log(weatherIcon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} location={location} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
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
    </div>
  );
}

export default App;
