import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counting",
    initialState: {
        count: 0
    },
    reducers: {
        incrementCounter: function(state){
            state.count += 1
        },
        decrementCounter: function(state){
            state.count -= 1
        },
    }
})

export const {incrementCounter, decrementCounter} = counterSlice.actions

export default counterSlice.reducer
