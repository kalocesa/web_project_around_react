import avatar from "../../images/avatar.jpg";
import avatarEdit from "../../images/pencil.svg";
import profileButton from "../../images/editButton.svg";
import addButton from "../../images/addButton.svg";
import Popup from "./Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import EditProfile from "./form/EditProfile/EditProfile";
import Card from "./components/Card/Card";
import { api } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

const Main = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    api.getProfileInfo().then((response) => {
      setCurrentUser(response);
    });
    api.getInitialCards().then((response) => {
      setCards(response);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content-avatar">
          <img
            id="image-avatar"
            src={currentUser.avatar}
            alt="avatar"
            className="profile__avatar"
          />
          <div
            className="profile__content-edit_profile"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              id="image-avatar-edit"
              src={avatarEdit}
              alt="avatar-edit"
              className="profile__avatar-edit"
            />
          </div>
        </div>
        <div className="profile__content-edit">
          <h1 className="profile__name">{currentUser.name}</h1>
          <img
            id="image-editButton"
            src={profileButton}
            alt="botón para editar el perfil"
            className="profile__button-edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__explorer">{currentUser.about}</p>
        </div>
        <div className="profile__content-add">
          <img
            id="image-addButton"
            src={addButton}
            alt="botón para añadir lugares"
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
            onCardLike={handleCardLike}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
