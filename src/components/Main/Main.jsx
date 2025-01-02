import avatar from "../../images/avatar.jpg";
import avatarEdit from "../../images/pencil.svg";
import profileButton from "../../images/editButton.svg";
import addButton from "../../images/addButton.svg";
import Popup from "./Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import EditProfile from "./form/EditProfile/EditProfile";
import Card from "./components/Card/Card";
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

const Main = () => {
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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content-avatar">
          <img
            id="image-avatar"
            src={avatar}
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
          <h1 className="profile__name">Katia Sandoval</h1>
          <img
            id="image-editButton"
            src={profileButton}
            alt="botón para editar el perfil"
            className="profile__button-edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__explorer">Exploradora</p>
        </div>
        <div className="profile__content-add">
          <img
            id="image-addButton"
            src={addButton}
            alt="botón para añadir lugares"
            className="profile__button-add"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
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
