import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, buttonText, onClose, name }) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <form className="modal__form">
        <h3>{title}</h3>
        <button type="button" onClick={onClose} />
        {children}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default ModalWithForm;
