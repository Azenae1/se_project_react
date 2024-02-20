import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} />
      <Main />
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
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </li>
            <li>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </li>
            <li>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </li>
          </ul>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
