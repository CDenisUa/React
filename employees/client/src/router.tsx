// Core
import { createBrowserRouter } from 'react-router-dom';
// Pages
import { Login, Register } from './pages';
// Components
import { App } from '@/components';

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
        element: <App />,
    },
    {
        path: Paths.login,
        element: <Login />,
    },
    {
        path: Paths.register,
        element: <Register />,
    },
]);
