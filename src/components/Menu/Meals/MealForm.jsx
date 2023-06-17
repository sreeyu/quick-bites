import React from "react";
import styles from './MealForm.module.css'
import Input from "../../UI/Input";

function MealForm(){
    return(
        <form className={styles.form} >
            <Input label={"Amount"} input={{id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
            <button>+ ADD</button>
        </form>
    )
};

export default MealForm;