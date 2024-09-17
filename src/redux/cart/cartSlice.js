import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils";
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./cart-utils";


const INITIAL_STATE_CART = {
    hidden: true,
    cartItems: [],
    SHIPPING_COST: 0,
}


export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE_CART,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                SHIPPING_COST: SHIPPING_COST,
            }
        },
        removeFromCart: (state, action) => {
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
            SHIPPING_COST: resetShippingCost(state.cartItems, SHIPPING_COST),
        }
        },

        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                SHIPPING_COST: 0,
            }
        },

        toggleCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
               
            }
        }
    }
})



export const {addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions

export default cartSlice.reducer