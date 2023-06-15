import React from "react";
import styles from './MenuSummary.module.css'

function MenuSummary(){
    return(
        <section className={styles.summary} >
            <h2>Satisfy your cravings, one tap at a time!</h2>
            <p>Welcome to Quick Bites, the food 
                lover's paradise where 
                deliciousness meets convenience! 
                Explore a world of flavors right 
                at your fingertips.</p>
            <p>
            Whether you're craving crispy fries, 
            cheesy pizzas, or exotic sushi rolls, 
            we've got your taste buds covered.
            </p>
        </section>
    );
};

export default MenuSummary;