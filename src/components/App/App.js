import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import {
  getForecastWeather,
  parseLocation,
  parseWeatherData,
  parseWeatherId,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { addItem, getItemsList, deleteItem } from "../../utils/api";
import { defaultClothingItems } from "../../utils/constants";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegister = () => {
    setActiveModal("signup");
  };
  const handleLogin = () => {
    setActiveModal("login");
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

  // const onAddItem = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const item = { name, imageUrl, weather };
    addItem(item)
      .then((item) => {
        console.log(item);
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        const updateClothesList = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(updateClothesList);
        handleCloseModal();
      })
      .catch(console.error);
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
      .catch(console.error);
    getItemsList()
      .then((res) => {
        setClothingItems(res);
      })

      .catch(console.error);
  }, []);

  // console.log(currentTemperatureUnit);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          onRegister={handleRegister}
          onLogin={handleLogin}
          location={location}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={weatherTemp}
              onSelectCard={handleSelectedCard}
              id={weatherIcon}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              cards={clothingItems}
              onSelectCard={handleSelectedCard}
              handleCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
          />
        )}

        {activeModal === "signup" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "signup"}
            onRegister={handleRegister}
          />
        )}

        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            onLogin={handleLogin}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onDelete={handleDeleteItem}
            onClose={handleCloseModal}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
