import { createSlice } from "@reduxjs/toolkit";

const Orders_InitialState = {
    orders: null,
    loading: false,
    error: null,
}


const ordersSlice = createSlice({
    name: 'orders',
    initialState: Orders_InitialState,
    reducers: {

        createOrderFail: (state = Orders_InitialState, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        fetchOrderSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                orders: [...action.payload],
            }
        },
        fetchOrderFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        fetchorderStart: (state) => {
            return {
                ...state,
                loading: true,
            }

        },
        clearOrders: (state) => {
            return {
                ...state,
                orders: null,

            }
        },
        clearError: (state) => {
            return {
                ...state,
                error: null
            }
        }

    }
})


export const { createOrderFail,
    fetchOrderSuccess,
    fetchOrderFail,
    fetchorderStart,
    clearOrders,
    clearError, } = ordersSlice.actions

    export default ordersSlice.reducer