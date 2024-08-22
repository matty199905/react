import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/Products";

const initialStateProducts = {
    products: Products
}



export const productsSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    reducer: {
        getProducts: state => {
            return state
        }
    }
})


export const {getProducts} = productsSlice.actions
// Permite usarlo luego para un DISPATCH (evento dentro del componente)

export default productsSlice.reducer
// Exporta todo el Slice
