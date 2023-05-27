// Types
import { RootState } from "@/redux";

export const selectIsAuthenticated = ( state: RootState ) => state.auth.isAuthenticated;
export const selectUser = ( state: RootState ) => state.auth.user;
