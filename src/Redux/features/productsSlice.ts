import {createSlice} from "@reduxjs/toolkit";

export type TProduct = {
    image: string;
    name: string;
    category: string;
    price: number;
    status: string;
    rating: number;
}

type TInitialState = {
    list: TProduct[];
}

const initialState: TInitialState = {
    list: [],
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export default ProductsSlice.reducer