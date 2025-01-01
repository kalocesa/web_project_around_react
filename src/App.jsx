import avatar from "./images/avatar.jpg";
import avatarEdit from "./images/pencil.svg";
import profileButton from "./images/editButton.svg";
import addButton from "./images/addButton.svg";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main className="content">
          <section className="profile">
            <div className="profile__content-avatar">
              <img
                id="image-avatar"
                src={avatar}
                alt="avatar"
                className="profile__avatar"
              />
              <div className="profile__content-edit_profile">
                <img
                  id="image-avatar-edit"
                  src={avatarEdit}
                  alt="avatar-edit"
                  className="profile__avatar-edit"
                />
              </div>
            </div>
            <div className="profile__content-edit">
              <h1 className="profile__name">Katia Sandoval</h1>
              <img
                id="image-editButton"
                src={profileButton}
                alt="botón para editar el perfil"
                className="profile__button-edit"
              />
              <p className="profile__explorer">Exploradora</p>
            </div>
            <div className="profile__content-add">
              <img
                id="image-addButton"
                src={addButton}
                alt="botón para añadir lugares"
                className="profile__button-add"
              />
            </div>
          </section>
          <section className="elements"></section>
        </main>
        <Footer />
      </div>

      <template className="template">
        <div className="element">
          <button id="button-trash" className="element__button-trash"></button>
          <img src="" alt="" className="element__image" />
          <div className="element__group">
            <p className="element__text"></p>
            <button
              id="button-like"
              className="element__like element__button-like"
            ></button>
            <span className="element__like-counter">0</span>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
