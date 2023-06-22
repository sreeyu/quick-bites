import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

function Cart(props){

    const ctx = useContext(CartContext);

    const itemNumber = ctx.items.reduce((sum, item) => {
        return sum + Number(item.amount);
    },0)

    const [bumpAnimation, setBumpAnimation] = useState(false)

    const { items } = ctx;

    useEffect(() => {
        
        if(items.length === 0){
            return;
        }
        setBumpAnimation(true)

        const timer = setTimeout(() => {
            setBumpAnimation(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    const btnClass = `${styles.cart} ${bumpAnimation ? styles.bump : ''}`
    
    return(
        <button className={btnClass} onClick={props.onCart} >
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