export interface EmployeePropTypes<T> {
    onFinish: (values: T) => void;
    onCancel?: () => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}