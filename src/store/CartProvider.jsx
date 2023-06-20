import React, { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCart ={
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    };
    return defaultCart;
}

function CartProvider(props){

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);

    const addItemToCart = (item) => {
        dispatchCartState({type: 'ADD', item: item});
    };

    const removeItemFromCart = (id) => {};

    const cartContext = {
        items: cartState.items,
        totalAmount: +cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider> 
    );
};

export default CartProvider;