const CardOpen = () => {
  return (
    <form name="open" class="popup__form" noValidate>
      <button class="popup__close">
        <img
          id="image-closeIcon"
          src="<%=require('./images/closeIcon.svg')%>"
          alt=""
          class="popup__button-close"
        />
      </button>
      <img src="" alt="" class="popup__image" />
      <p class="popup__text"></p>
    </form>
  );
};

export default CardOpen;
