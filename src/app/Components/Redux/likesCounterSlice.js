import { createSlice } from "@reduxjs/toolkit";

export const likesCounter = createSlice({
    name: "likes",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        }
    }
});

export const {increment} = likesCounter.actions;

export default likesCounter.reducer;