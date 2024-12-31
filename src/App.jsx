import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Main/Popup/Popup";

import closeButton from "./images/closeIcon.svg";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <Popup title="Editar Perfil"></Popup>
        <Popup title="Crear nueva carta"></Popup>
        <Popup title="Abrir carta con foto y titulo"></Popup>
        <Popup title="Eliminar una carta"></Popup>
        <Popup title="Cambiar avatar"></Popup>
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
