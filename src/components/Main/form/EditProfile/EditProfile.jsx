const EditProfile = () => {
  return (
    <form
      name="profile"
      class="popup__form popup__form-profile"
      id="profile_form"
      novalidate
    >
      <input
        type="text"
        required
        minlength="2"
        maxlength="40"
        class="popup__input popup__input_name"
        id="name"
        name="name"
        placeholder="Nombre"
      />
      <span class="popup__input-error name-error"></span>
      <input
        type="text"
        required
        minlength="2"
        maxlength="200"
        class="popup__input popup__input_aboutme"
        id="aboutme"
        name="description"
        placeholder="Acerca de mí"
      />
      <span class="popup__input-error aboutme-error"></span>
      <button type="submit" class="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default EditProfile;
