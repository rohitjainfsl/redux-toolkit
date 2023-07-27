import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        inputValue: '',
        tasks: [],
        completed: []
    },
    reducers: {
        setInputValue: function(state, action){
            state.inputValue = action.payload
        },
        handleSubmit: function(state){
            state.tasks = [...state.tasks, state.inputValue]
            console.log(state.tasks)
            state.inputValue = ""; //make the input blank
        },
        
        handleEdit: function(state, action){},

        handleDelete: function(state, action){
            state.tasks = state.tasks.filter((task, index) => {return index !== action.payload})
        },
        handleCompleted: function(state, action){
            state.completed = [...state.completed, action.payload]
        }
    }
});

export const {setInputValue, handleSubmit, handleEdit, handleDelete, handleCompleted} = todoSlice.actions
export default todoSlice.reducer
