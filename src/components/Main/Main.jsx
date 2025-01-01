import Popup from "./Popup/Popup";
import EditProfile from "./form/EditProfile/EditProfile";
import NewCard from "./form/NewCard/NewCard";
import CardOpen from "./form/CardOpen/CardOpen";
import CardDelete from "./form/CardDelete/CardDelete";
import EditAvatar from "./form/EditAvatar/EditAvatar";


const Main = () => {
  const [popupEdit, setPopupEdit] = useState(false);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupCardOpen, setPopupCardOpen] = useState(false);
  const [popupCardDelete, setPopupCardDelete] = useState(false);
  const [popupAvatar, setPopupAvatar] = useState(false);
  
  {popupEdit && (
    <Popup title="Editar Perfil">
            <EditProfile />
          </Popup>
          
  )}
  <Popup title="Crear nueva carta">
            <NewCard />
          </Popup>
          <Popup title="Abrir carta con foto y titulo">
            <CardOpen />
          </Popup>
          <Popup title="Eliminar una carta">
            <CardDelete />
          </Popup>
          <Popup title="Cambiar avatar">
            <EditAvatar />
          </Popup>
};


export default Main;
