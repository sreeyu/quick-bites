import React, { useRef, useState } from "react";
import styles from './MealForm.module.css'
import Input from "../../UI/Input";

function MealForm(props){

    const [formValid, setFormValid] = useState(true);

    const inputEnteredAmount = useRef();

    const getAmount = (event) =>{
        event.preventDefault();

        const enteredAmount = inputEnteredAmount.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setFormValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    
    return(
        <form className={styles.form} onSubmit={getAmount} >
            <Input ref={inputEnteredAmount} label={"Amount"} input={{id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
            <button>+ ADD</button>
            {!formValid && <p>Enter Valid Quantity</p>}
        </form>
    )
};

export default MealForm;