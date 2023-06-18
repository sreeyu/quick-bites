import React from "react";
import styles from './Cart.module.css'
import Modal from "../UI/Modal";

function Cart() {

    const cartItems = (<ul className={styles["cart-items"]}>{[{ id: 'c1', name: 'Pizza', amount: 2, price: 200.00 }].map(item => <li>{item.name}</li>)}</ul>);

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>400.00</span>
            </div>
            <div className={styles.action}>
                <button className={styles.cancel}>Cancel</button>
                <button className={styles.order}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;