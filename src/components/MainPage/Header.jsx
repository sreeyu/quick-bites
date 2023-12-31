import React,  { Fragment } from "react";
import styles from './Header.module.css'
import Image from '../../images/food.avif'
import Cart from "./Cart";


function Header(props) {

    return(
        <Fragment>
            <header className={styles.header}>
                <h1>QuickBites</h1>
                <Cart onCart={props.onCart} />
            </header>
            <div className={styles["front-image"]}>
                <img src={Image} alt="Food" />
            </div>
        </Fragment>
    )
}

export default Header;