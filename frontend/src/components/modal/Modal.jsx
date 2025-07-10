import "./Modal.css";
import CloseIcon from "../../icons/close.svg?react";

const Modal = ({ isActive, onClose, children }) => {
  return (
    <div className={`modal-box ${isActive ? "modal-box-active" : ""}`}>
      <div
        className={`modal-container ${
          isActive ? "modal-container-active" : ""
        }`}
      >
        <div className="modal-icon clickable" onClick={onClose}>
          <CloseIcon />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
