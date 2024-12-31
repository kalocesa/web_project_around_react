import logo from "./images/logo.png";
import line from "./images/Line.svg";
import avatar from "./images/avatar.jpg";
import avatarEdit from "./images/pencil.svg";
import profileButton from "./images/editButton.svg";
import addButton from "./images/addButton.svg";
import closeButton from "./images/closeIcon.svg";

function App() {
  return (
    <>
      <div class="page">
        <header class="header">
          <img
            id="image-logo"
            src={logo}
            alt="Icono con texto alrededor de México"
            class="header__icon"
          />
          <img id="image-line" src={line} alt="line" class="header__line" />
        </header>
        <main class="content">
          <section class="profile">
            <div class="profile__content-avatar">
              <img
                id="image-avatar"
                src={avatar}
                alt="avatar"
                class="profile__avatar"
              />
              <div class="profile__content-edit_profile">
                <img
                  id="image-avatar-edit"
                  src={avatarEdit}
                  alt="avatar-edit"
                  class="profile__avatar-edit"
                />
              </div>
            </div>
            <div class="profile__content-edit">
              <h1 class="profile__name">Katia Sandoval</h1>
              <img
                id="image-editButton"
                src={profileButton}
                alt="botón para editar el perfil"
                class="profile__button-edit"
              />
              <p class="profile__explorer">Exploradora</p>
            </div>
            <div class="profile__content-add">
              <img
                id="image-addButton"
                src={addButton}
                alt="botón para añadir lugares"
                class="profile__button-add"
              />
            </div>
          </section>
          <section class="elements"></section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">
            &#169; 2024 Around to MX por Katia Sandoval
          </p>
        </footer>
        <div class="popup popup_profile">
          <div class="popup__background"></div>
          <div class="popup__content">
            <button class="popup__close">
              <img
                id="image-closeIcon"
                src={closeButton}
                alt="boton de cerrar"
                class="popup__button-close"
              />
            </button>
            <h2 class="popup__title">Editar perfil</h2>
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
          </div>
        </div>
        <div class="popup popup_add">
          <div class="popup__background"></div>
          <div class="popup__content">
            <button class="popup__close">
              <img
                id="image-closeIcon"
                src={closeButton}
                alt="boton de cerrar"
                class="popup__button-close"
              />
            </button>
            <h2 class="popup__title">Nuevo lugar</h2>
            <form name="add" class="popup__form" novalidate>
              <input
                type="text"
                required
                minlength="2"
                maxlength="30"
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
              <button
                id="add-submit"
                type="submit"
                class="popup__button-submit"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="popup popup_image">
        <div class="popup__background"></div>
        <div class="popup__content popup__content-image">
          <button class="popup__close">
            <img
              id="image-closeIcon"
              src={closeButton}
              alt=""
              class="popup__button-close"
            />
          </button>
          <img src="" alt="" class="popup__image" />
          <p class="popup__text"></p>
        </div>
      </div>
      <div class="popup popup_delete">
        <div class="popup__background"></div>
        <div class="popup__content">
          <button class="popup__close">
            <img
              id="image-closeIcon"
              src={closeButton}
              alt="boton de cerrar"
              class="popup__button-close"
            />
          </button>
          <h2 class="popup__title popup__title-delete">¿Estás seguro?</h2>
          <form name="delete" class="popup__form" novalidate>
            <button id="add-submit" type="submit" class="popup__button-submit">
              Sí
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_avatar">
        <div class="popup__background"></div>
        <div class="popup__content">
          <button class="popup__close">
            <img
              id="image-closeIcon"
              src={closeButton}
              alt="boton de cerrar"
              class="popup__button-close"
            />
          </button>
          <h2 class="popup__title">Cambiar foto de perfil</h2>
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
        </div>
      </div>
      <template class="template">
        <div class="element">
          <button id="button-trash" class="element__button-trash"></button>
          <img src="" alt="" class="element__image" />
          <div class="element__group">
            <p class="element__text"></p>
            <button
              id="button-like"
              class="element__like element__button-like"
            ></button>
            <span class="element__like-counter">0</span>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
