import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const modalContainer = document.querySelector("#modalContainer");

export default function Modal({ title, children, isOpened, onClose }) {
  if (!isOpened) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal" tabIndex="-1" role="dialog">
      <CSSTransition
        appear
        in
        classNames="modal-transition"
        unmountOnExit
        timeout={300}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </CSSTransition>
    </div>,
    modalContainer
  );
}
