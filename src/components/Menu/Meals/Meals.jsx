import React from "react";
import styles from './Meals.module.css'

function Meals(props){

    const price = `₹${props.price.toFixed(2)}`

    return(
        <li className={styles.meals} >
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description} >{props.description}</div>
                <div className={styles.price} >{price}</div>
            </div>
            
        </li>
    )
};

export default Meals;