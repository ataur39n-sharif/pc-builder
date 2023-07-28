import {TProduct} from "@/Redux/features/productsSlice";
import {createSlice} from "@reduxjs/toolkit";

type TInitialState = {
    cpu: TProduct | null;
    powerSupplyUnit: TProduct | null;
    motherBoard: TProduct | null;
    storage: TProduct | null;
    ram: TProduct | null;
    monitor: TProduct | null;
}
const initialState: TInitialState = {
    cpu: null,
    powerSupplyUnit: null,
    motherBoard: null,
    storage: null,
    ram: null,
    monitor: null,
}

export const PcBuildSlice = createSlice({
    name: "PcBuildSlice",
    initialState,
    reducers: {}
})

export default PcBuildSlice.reducer