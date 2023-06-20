import React, { useContext } from "react";
import styles from './Meals.module.css'
import MealForm from "./MealForm";
import CartContext from "../../../store/cart-context";

function Meals(props){

    const price = `₹${props.price.toFixed(2)}`

    const ctx = useContext(CartContext)

    const getAddToCart = (amount) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return(
        <li className={styles.meals} >
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description} >{props.description}</div>
                <div className={styles.price} >{price}</div>
            </div>
            <div>
                <MealForm onAddToCart={getAddToCart} id={props.id} />
            </div>
        </li>
    )
};

export default Meals;