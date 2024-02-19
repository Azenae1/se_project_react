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

          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
