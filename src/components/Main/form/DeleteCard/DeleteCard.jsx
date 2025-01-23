const DeleteCard = () => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
  };

  return (
    <form name="add" className="popup__form" noValidate>
      <button
        id="add-submit"
        type="submit"
        className="popup__button-submit"
        onClick={handleSubmitForm}
      >
        Si
      </button>
    </form>
  );
};

export default DeleteCard;
