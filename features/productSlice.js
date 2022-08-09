import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        title: "test",
        price: "123"
    },
    reducers: {
        // function
        update: (state, action) => {
            state.title = action.payload.title;
            state.price = action.payload.price;
        }
    }
})


export const { update } = productSlice.actions;

export default productSlice.reducer;