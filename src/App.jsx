import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { useState, useEffect } from "react";

function App() {
  const { currentUser } = useState(CurrentUserContext);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>

        <template className="template">
          <div className="element">
            <button
              id="button-trash"
              className="element__button-trash"
            ></button>
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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
