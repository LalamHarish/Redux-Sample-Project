import { createSlice } from "@reduxjs/toolkit";

export const userCommentsSlice = createSlice({
    name: "userComments",
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
            state.comments.push(action.payload);
        }
    }
});

export const{addComments} = userCommentsSlice.actions;

export default userCommentsSlice.reducer;