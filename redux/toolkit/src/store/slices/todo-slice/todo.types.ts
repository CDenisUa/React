export type AddTodoPayloadTypes = string;

export type TodoTypes = {
    id: string,
    title: string,
    completed: boolean,
}

export type initialStateTypes = {
    list: TodoTypes[],
}