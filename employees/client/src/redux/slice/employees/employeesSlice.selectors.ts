import { RootState } from "@/redux";
import { stat } from "fs";

export const selectEmployees = (state: RootState) => state.employees;