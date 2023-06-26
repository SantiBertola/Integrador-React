import { createSlice } from "@reduxjs/toolkit"
import { TotalProducts, Products } from "../../data/Products"

const initialState = {
    products: Products,
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: state => state
    }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer


