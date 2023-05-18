export type ErrorWithMessage = {
    status: number,
    data: {
        message: string;
    }
}

export interface UserData {
    email: string;
    password: string;
    name: string;
};