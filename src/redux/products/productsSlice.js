import { createSlice } from "@reduxjs/toolkit";
import { ProductosXCategorias, TotalProducts } from "../../data/Products";

const initialStateProducts = {
    products: ProductosXCategorias,
    TotalProducts: TotalProducts,
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
