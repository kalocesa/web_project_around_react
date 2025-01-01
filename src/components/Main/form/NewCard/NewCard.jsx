const NewCard = () => {
  return (
    <form name="add" class="popup__form" noValidate>
      <input
        type="text"
        required
        minLength="2"
        maxLength="30"
        class="popup__input popup__input_title"
        id="title"
        name="title"
        placeholder="Título"
      />
      <span class="popup__input-error title-error"></span>
      <input
        type="url"
        required
        class="popup__input popup__input_link"
        id="link"
        name="link"
        placeholder="Imagen (URL)"
      />
      <span class="popup__input-error link-error"></span>
      <button id="add-submit" type="submit" class="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default NewCard;
