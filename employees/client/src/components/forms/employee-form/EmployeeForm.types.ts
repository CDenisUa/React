export interface EmployeePropTypes<T> {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T
}