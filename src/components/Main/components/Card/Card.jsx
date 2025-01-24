import ImagePopup from "../ImagePopup/ImagePopup";
import DeleteCard from "../../form/DeleteCard/DeleteCard";

const Card = (props) => {
  const { name, link, isLiked } = props.card;

  const imageComponent = {
    children: <ImagePopup name={name} link={link} />,
  };

  const deleteCardPopup = {
    title: "¿Estás seguro?",
    children: (
      <DeleteCard handleDeleteCard={props.handleCardDelete} card={props.card} />
    ),
  };

  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__button-like" : "element__button-dislike"
  }`;

  return (
    <div className="element">
      <button
        id="button-trash"
        type="button"
        className="element__button-trash"
        onClick={() => props.handleOpenPopup(deleteCardPopup)}
      ></button>
      <img
        src={link}
        alt=""
        className="element__image"
        onClick={() => props.handleOpenPopup(imageComponent)}
      />
      <div className="element__group">
        <p className="element__text">{name}</p>
        <button
          id="button-like"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => props.handleLikeClick(props.card)}
        ></button>
        <span className="element__like-counter">0</span>
      </div>
    </div>
  );
};

export default Card;
