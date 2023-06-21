import React, { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCart ={
    items: [],
    totalAmount: +0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemsIndex];
        

        let updatedItems;

        if (existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: +action.item.amount + +existingCartItem.amount
            };
            updatedItems = [...state.items]
            updatedItems[existingCartItemsIndex] = updatedItem;
        } else{
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: +updatedAmount
        };
    };
    if(action.type === 'REMOVE'){
        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemsIndex]
        const updatedAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemsIndex] = updatedItem;
        }
        return{
            items: updatedItems,
            totalAmount: +updatedAmount
        }
    }
    return defaultCart;
}

function CartProvider(props){

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);

    const addItemToCart = (item) => {
        dispatchCartState({type: 'ADD', item: item});
    };

    const removeItemFromCart = (id) => {
        dispatchCartState({type: 'REMOVE', id: id});
    };

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