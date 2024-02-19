import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />

      <ModalWithForm title="New Garment" buttonText="Add Garment">
        <label className="modal__form-field">
          Name
          <input type="text" name="name" minLength="1" maxLength="30" />
        </label>
        <label className="modal__form-field">
          Image URL
          <input type="url" name="link" minLength="2" />
        </label>
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
    </div>
  );
}

export default App;
