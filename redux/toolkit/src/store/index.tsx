// Core
import { configureStore } from "@reduxjs/toolkit";
//Redux
import todoSlice from './slices/todo-slice/todo.slice';

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;