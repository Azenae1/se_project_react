import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, buttonText, onClose, name }) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <form className="modal__form">
          <h3 className="modal__form-title">{title}</h3>
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
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
