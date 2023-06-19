import React, { useContext } from 'react';
import styles from './Cart.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

function Cart(props){

    const ctx = useContext(CartContext);

    const itemNumber = ctx.items.reduce((sum, item) => {
        return sum + item.amount;
    },0)
    
    return(
        <button className={styles.cart} onClick={props.onCart} >
            <span className={styles.icon} >
                <CartIcon />
            </span>
            <span >
                Your Cart
            </span>
            <span className={styles.entry} >
                {itemNumber}
            </span>
        </button>
    );
};

export default Cart;