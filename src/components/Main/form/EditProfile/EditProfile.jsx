const EditProfile = () => {
  return (
    <form
      name="profile"
      className="popup__form popup__form-profile"
      id="profile_form"
      noValidate
    >
      <input
        type="text"
        required
        minLength="2"
        maxLength="40"
        className="popup__input popup__input_name"
        id="name"
        name="name"
        placeholder="Nombre"
      />
      <span className="popup__input-error name-error"></span>
      <input
        type="text"
        required
        minLength="2"
        maxLength="200"
        className="popup__input popup__input_aboutme"
        id="aboutme"
        name="description"
        placeholder="Acerca de mí"
      />
      <span className="popup__input-error aboutme-error"></span>
      <button type="submit" className="popup__button-submit">
        Guardar
      </button>
    </form>
  );
};

export default EditProfile;
