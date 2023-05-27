// Core
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { api } from './services/api';
// Reducers
import auth from './slice/auth/authSlice';
import employees from './slice/employees/employeesSlice';
// Middleware
import { listenerMiddleware } from "./middleware/auth";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
        employees,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction< ReturnType, RootState, unknown, Action<string>>;