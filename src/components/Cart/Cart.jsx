import React ,{ useContext, useState } from "react";
import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {

    const ctx = useContext(CartContext);

    const [checkout, setCheckout] = useState(false)

    const totalAmount = `₹${ctx.totalAmount.toFixed(2)}`
    const hasItems = ctx.items.length > 0;

    const getAddItem = (item) => {
        ctx.addItem({...item, amount: 1})
    };

    const getRemoveItem = (id) => {
        ctx.removeItem(id)
    }

    const checkoutFormHandler = () => {
        setCheckout(true);
    }

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {ctx.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={getRemoveItem.bind(null, item.id)}
                onAdd={getAddItem.bind(null, item)}
            />
            ))}
        </ul>
    );

    const modalAction = (
        <div className={styles.action}>
                <button className={styles.cancel} onClick={props.onCancel} >Close</button>
                {hasItems && <button className={styles.order} onClick={checkoutFormHandler} >Order</button>}
            </div>
    )

    return (
        <Modal onCancel={props.onCancel}>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            {checkout && <Checkout onCancel={props.onCancel} />}
            {!checkout && modalAction}
        </Modal>
    )
};

export default Cart;