import { createSlice } from "@reduxjs/toolkit";
import { recommended } from "../../data/Recommended";


const InitialState_recommended = {
recommended: recommended
}


export const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: InitialState_recommended,
    reducer: {
        getRecommended: state => {
            return state
        }
    }
})


export const {getRecommended} = recommendedSlice.actions;

export default recommendedSlice.reducer