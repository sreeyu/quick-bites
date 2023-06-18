import React, { Fragment } from "react";
import ReactDOM from 'react-dom/client';
import styles from './Modal.module.css'

function Backdrop(){
    return <div className={styles.backdrop} />
}

function ModalOverlay(props){
    return(
        <div className={styles.modal} >
            <div className={styles.content} >{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById("overlay");

function Modal(props){
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
};

export default Modal;