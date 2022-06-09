import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:"posts",
    initialState: {
        name: "hello",
        value:0,
    },
    reducers:{
        changeName: (state, action) => {
            console.log("change name");
            state.name = action.payload;
        }
    }
});

export const getName = (state) => state.posts.name;
export const getValue = (state) => state.posts.value;

export const {changeName} = postsSlice.actions;

export default postsSlice.reducer;