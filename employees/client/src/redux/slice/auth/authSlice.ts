
// Core
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Types 
import { InitialState, User } from "./authSlice.types";
// Redux
import { authApi } from "@/redux/services/auth/auth";

const initialState: InitialState = {
    user: null,
    isAuthenticated: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })
    }
});

export const { logout } = slice.actions;

export default slice.reducer;
