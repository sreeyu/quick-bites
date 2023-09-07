import React from "react";
import styles from './Checkout.module.css';


function Checkout(props){

    return(
        <form>
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <button type="button" onClick={props.onCancel} >Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;