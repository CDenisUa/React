import { nanoid } from '@reduxjs/toolkit';
// Core
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types 
import type { initialStateTypes } from "./todo.types";

const initialState: initialStateTypes = {
    list: [],
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo (state, action: PayloadAction<string>) {
            state.list.push({
                id: nanoid(),
                title: action.payload,
                completed: false,
            });
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
        completeTodo(state, action: PayloadAction<string>) {
            const todo = state.list.find((item) => item.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;