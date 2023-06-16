import React from "react";
import styles from './MealForm.module.css'

function MealForm(){
    return(
        <form className={styles.form} >
            <button>+ ADD</button>
        </form>
    )
};

export default MealForm;