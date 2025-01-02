const ImagePopup = (props) => {
  const { name, link } = props.card;

  return (
    <form name="open" class="popup__form" noValidate>
      <button class="popup__close">
        <img
          id="image-closeIcon"
          src={link}
          alt=""
          class="popup__button-close"
        />
      </button>
      <img src="" alt="" class="popup__image" />
      <p class="popup__text">{name}</p>
    </form>
  );
};

export default ImagePopup;
