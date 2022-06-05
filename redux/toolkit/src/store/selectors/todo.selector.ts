// Types
import type { RootState } from "..";

export const todoListSelector = (state: RootState) => state.todo.list;