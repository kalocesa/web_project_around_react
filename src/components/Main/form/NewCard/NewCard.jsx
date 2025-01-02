const NewCard = () => {
  return (
    <form name="add" className="popup__form" noValidate>
      <input
        type="text"
        required
        minLength="2"
        maxLength="30"
        className="popup__input popup__input_title"
        id="title"
        name="title"
        placeholder="Título"
      />
      <span className="popup__input-error title-error"></span>
      <input
        type="url"
        required
        className="popup__input popup__input_link"
        id="link"
        name="link"
        placeholder="Imagen (URL)"
      />
      <span className="popup__input-error link-error"></span>
      <button id="add-submit" type="submit" className="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default NewCard;
