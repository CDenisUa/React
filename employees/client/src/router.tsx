// Core
import { createBrowserRouter } from 'react-router-dom';
// Pages
import { LoginPage, RegisterPage, EmployeesPage } from './pages';

export const Paths = {
    home: '/',
    login: '/login',
    register: '/register',
    employeeAdd: '/employee/add',
    employeeEdit: '/employee/edit',
    employee: '/employee',
    status: '/status',
} as const;

export const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <EmployeesPage />,
    },
    {
        path: Paths.login,
        element: <LoginPage />,
    },
    {
        path: Paths.register,
        element: <RegisterPage />,
    },
]);
