const EditProfile = () => {
  return (
    <form
      name="profile"
      class="popup__form popup__form-profile"
      id="profile_form"
      noValidate
    >
      <input
        type="text"
        required
        minLength="2"
        maxLength="40"
        class="popup__input popup__input_name"
        id="name"
        name="name"
        placeholder="Nombre"
      />
      <span class="popup__input-error name-error"></span>
      <input
        type="text"
        required
        minLength="2"
        maxLength="200"
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
