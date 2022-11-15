import popup__cross from '../images/popup__cross.svg';
import modalPopup__confirm from '../images/modalPopup__confirm.svg';
import modalPopup__decline from '../images/modalPopup__decline.svg';

function ModalApi({ isOpen, onClose, status, modalMessage }) {

  return (
    <div className={`modalPopup ${isOpen && `modalPopup_active`}`}>
      <div className="modalPopup__box">
        <img className="modalPopup__image" src={`${status}` === true ? modalPopup__confirm : modalPopup__decline} alt="Иконка API" />
        <p className="modalPopup__message">{modalMessage}</p>
        <img className="modalPopup__cross" src={popup__cross} alt="иконка крестика" onClick={onClose}/>
      </div>
    </div>
  );
}

export default ModalApi;
