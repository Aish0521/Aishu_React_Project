import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrops = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {/* without portal */}
      {/* <Backdrops />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {createPortal(<Backdrops onClose={props.onClose}  />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
