// Types
import { UserData } from "@/types";

export interface ResponseLoginData extends UserData {
    token: string;
}