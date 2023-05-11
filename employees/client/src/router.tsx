// Core
import { createBrowserRouter } from 'react-router-dom';
// Pages
import { Login } from './pages';
// Components
import { App } from '@/components';

const Paths = {
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
]);
