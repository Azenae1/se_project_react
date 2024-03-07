import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onAddItem}
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
  );
};

export default AddItemModal;
