const EditAvatar = () => {
  return (
    <form name="add" className="popup__form" noValidate>
      <input
        type="url"
        required
        className="popup__input popup__input_link-avatar"
        id="linkAvatar"
        name="avatar"
        placeholder="Imagen (URL)"
      />
      <span className="popup__input-error link_avatar-error"></span>
      <button id="add-submit" type="submit" className="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default EditAvatar;
