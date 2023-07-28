import {createSlice} from "@reduxjs/toolkit";

export enum ECategories {
    cpu = "cpu",
    storage = "storage",
    ram = "ram",
    monitor = "monitor",
    keyboard = "keyboard",
    mouse = "mouse",
    power_supply = "power_supply",
    motherboard = "motherboard"
}

export type TProduct = {
    image: string;
    name: string;
    category: ECategories;
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