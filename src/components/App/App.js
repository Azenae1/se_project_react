import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  getForecastWeather,
  parseLocation,
  parseWeatherData,
  parseWeatherId,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  addItem,
  getItemsList,
  deleteItem,
  editUserInfo,
  addLike,
  removeLike,
} from "../../utils/api";
import { checkToken } from "../../utils/jwtToken";
import { signIn, signUp } from "../../utils/auth";
import { defaultClothingItems } from "../../utils/constants";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [weatherTemp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const openCreateModal = () => {
    setActiveModal("create");
  };
  const openRegisterModal = () => {
    setActiveModal("signup");
  };
  const openLoginModal = () => {
    setActiveModal("login");
  };
  const openEditModal = () => {
    setActiveModal("edit");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleRedirect = () => {
    activeModal === "signup"
      ? setActiveModal("login")
      : setActiveModal("signup");
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    signIn(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          handleCloseModal();
        }
        checkToken(res.token)
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleRegister = ({ name, password, email, avatar }) => {
    setIsLoading(true);
    signUp(name, password, email, avatar)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleEditProfile = (name, avatar) => {
    setIsLoading(true);
    editUserInfo(name, avatar)
      .then((data) => {
        handleCloseModal();
        setCurrentUser(data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
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
  const handleLike = (id, isLiked) => {
    isLiked
      ? removeLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err))
      : addLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch(console.error)
        .finally(() => setIsLoggedInLoading(false));
    }
  }, []);

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
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={openCreateModal}
            onRegister={openRegisterModal}
            onLogin={openLoginModal}
            location={location}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={weatherTemp}
                onSelectCard={handleSelectedCard}
                id={weatherIcon}
                clothingItems={clothingItems}
                onCardLike={handleLike}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              isLoggedInLoading={isLoggedInLoading}
            >
              <Profile
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={openCreateModal}
                onEditModal={openEditModal}
                isLoggedIn={isLoggedIn}
                onCardLike={handleLike}
              />
            </ProtectedRoute>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen
              onAddItem={handleAddItemSubmit}
            />
          )}

          {activeModal === "signup" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen
              onRegister={handleRegister}
              switchToLogin={handleRedirect}
              isLoading={isLoading}
            />
          )}

          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen
              onLogin={handleLogin}
              switchToRegister={handleRedirect}
              isLoading={isLoading}
            />
          )}

          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onDelete={handleDeleteItem}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen
              name={"edit"}
              onClose={handleCloseModal}
              handleEditProfile={handleEditProfile}
              isLoading={isLoading}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
