import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, buttonText, onClose, name }) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__form-container">
        <button
          type="button"
          onClick={onClose}
          className="modal__form_close-button"
        />
        <form className="modal__form">
          <h3 className="modal__form-title">{title}</h3>

          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
