import React from "react";
import styles from './Checkout.module.css';


function Checkout(props){

    return(
        <form className={styles.form}>
            <div className={styles.control} >
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div className={styles.control} >
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div className={styles.control} >
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className={styles.control} >
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <div className={styles.actions} >
                <button type="button" onClick={props.onCancel} >Cancel</button>
                <button className={styles.submit} >Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;