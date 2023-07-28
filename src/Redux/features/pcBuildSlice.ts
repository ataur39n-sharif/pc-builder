import {TProduct} from "@/Redux/features/productsSlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const categoryList = ["cpu", "storage", "ram", "monitor", "power_supply", "motherboard"]

type TInitialState = {
    cpu: TProduct | null;
    power_supply: TProduct | null;
    motherboard: TProduct | null;
    storage: TProduct | null;
    ram: TProduct | null;
    monitor: TProduct | null;
}
const initialState: TInitialState = {
    cpu: null,
    power_supply: null,
    motherboard: null,
    storage: null,
    ram: null,
    monitor: null,
}

export const PcBuildSlice = createSlice({
    name: "PcBuildSlice",
    initialState,
    reducers: {
        addToList: (state: TInitialState, action: PayloadAction<TProduct>) => {
            const condition = categoryList.includes(action.payload.category)
            if (condition) {
                // @ts-ignore
                state[action.payload.category] = action.payload
            } else {
                // @ts-ignore
                state[action.payload.category] = null
            }
        },
        removeFromList: (state: TInitialState, action: PayloadAction<TProduct>) => {
            const condition = categoryList.includes(action.payload.category)
            if (condition) {
                // @ts-ignore
                state[action.payload.category] = null
            }
        },
    }
})

export default PcBuildSlice.reducer