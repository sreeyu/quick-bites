import styles from './Cart.module.css'
import CartIcon from '../Cart/CartIcon'

function Cart(){
    return(
        <button className={styles.cart} >
            <span className={styles.icon} >
                <CartIcon />
            </span>
            <span >
                Your Cart
            </span>
            <span className={styles.entry} >
                3
            </span>
        </button>
    );
};

export default Cart;