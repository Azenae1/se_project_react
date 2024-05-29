import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ChangeCityModal from "../ChangeCityModal/ChangeCityModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  // getCoordinates,
  getForecastWeather,
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
  editCityInfo,
  addLike,
  removeLike,
} from "../../utils/api";
import { checkToken } from "../../utils/jwtToken";
import { signIn, signUp } from "../../utils/auth";
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
  const [cards, setCards] = useState([]);
  const defaultLocation = "New York";

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
  const openCityModal = () => {
    setActiveModal("city");
  };
  const openDeleteModal = () => {
    setActiveModal("delete");
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
          .catch(console.error);
      })
      .catch(console.error)
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

  const handleCityChange = (city) => {
    setIsLoading(true);
    editCityInfo(city)
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

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const item = { name, imageUrl, weather };
    addItem(item)
      .then((item) => {
        console.log(item);
        setCards([item, ...cards]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        const updateClothesList = cards.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setSelectedCard({});
        setCards(updateClothesList);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLike = (id, isLiked) => {
    isLiked
      ? removeLike(id)
          .then((updatedCard) => {
            setCards((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.item : card))
            );
          })
          .catch(console.error)
      : addLike(id)
          .then((updatedCard) => {
            setCards((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.item : card))
            );
          })
          .catch(console.error);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
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
    } else {
      setIsLoggedInLoading(false);
    }
  }, []);

  useEffect(() => {
    const city =
      isLoggedIn && currentUser.city ? currentUser.city : defaultLocation;

    getForecastWeather(city)
      .then((data) => {
        // console.log(data);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        setLocation(city);
        const image = `str${parseWeatherId(data)}`;
        setWeatherIcon(image);
        // console.log(image);
      })
      .catch(console.error);

    getItemsList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.error);
  }, [isLoggedIn, currentUser.city, defaultLocation]);

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
            defaultLocation={location}
            onCityChange={openCityModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={weatherTemp}
                onSelectCard={handleSelectedCard}
                id={weatherIcon}
                cards={cards}
                isLoggedIn={isLoggedIn}
                onCardLike={handleLike}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              isLoggedInLoading={isLoggedInLoading}
            >
              <Profile
                cards={cards}
                onSelectCard={handleSelectedCard}
                onLogout={handleLogout}
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
              onDelete={openDeleteModal}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteItemModal
              isOpen
              onClose={handleCloseModal}
              handleDelete={handleCardDelete}
              handleCancel={() => {
                setActiveModal("preview");
              }}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen
              name={"edit"}
              handleCloseModal={handleCloseModal}
              handleEditProfile={handleEditProfile}
              isLoading={isLoading}
            />
          )}
          {activeModal === "city" && (
            <ChangeCityModal
              isOpen
              name={"city"}
              handleCloseModal={handleCloseModal}
              handleCityChange={handleCityChange}
              isLoading={isLoading}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
