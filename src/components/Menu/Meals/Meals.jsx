import React from "react";
import styles from './Meals.module.css'

function Meals(props){

    return(
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{props.price}</div>
            </div>
            
        </li>
    )
};

export default Meals;