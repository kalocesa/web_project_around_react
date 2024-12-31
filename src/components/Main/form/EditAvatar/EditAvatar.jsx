const EditAvatar = () => {
  return (
    <form name="add" class="popup__form" novalidate>
      <input
        type="url"
        required
        class="popup__input popup__input_link-avatar"
        id="linkAvatar"
        name="avatar"
        placeholder="Imagen (URL)"
      />
      <span class="popup__input-error link_avatar-error"></span>
      <button id="add-submit" type="submit" class="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default EditAvatar;
