import React, { Fragment } from "react";
import { ReactDOM } from "react";
import styles from './Modal.module.css'

function Backdrop(props){
    return <div className={styles.backdrop} ></div>
}

function ModalOverlay(props){
    return(
        <div className={styles.modal} >
            <div className={styles.content} >{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlay')

function Modal(){
    <Fragment>
        {ReactDOM.createPortal(< Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </Fragment>
};

export default Modal;