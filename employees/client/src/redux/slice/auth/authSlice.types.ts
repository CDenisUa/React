// Types
import { UserData } from "@/types";

export interface User extends UserData {
    token?: string;
}

export interface InitialState {
    user: User | null;
    isAuthenticated: boolean;
}