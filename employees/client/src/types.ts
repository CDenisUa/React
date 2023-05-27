export type ErrorWithMessage = {
    status: number;
    data: {
        message: string;
    }
}

export interface UserData {
    email: string;
    password: string;
    name: string;
};

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    age: string;
    address: string;
    userId: string
}