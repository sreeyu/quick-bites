import React ,{ useContext } from "react";
import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

function Cart(props) {

    const ctx = useContext(CartContext)

    const totalAmount = `₹${ctx.totalAmount.toFixed(2)}`
    const hasItems = ctx.items.length > 0;

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {ctx.items.map(item => (
            <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onCancel={props.onCancel}>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.action}>
                <button className={styles.cancel} onClick={props.onCancel} >Cancel</button>
                {hasItems && <button className={styles.order}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;