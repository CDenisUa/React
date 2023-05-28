// Core
import { createBrowserRouter } from 'react-router-dom';
// Pages
import { 
    LoginPage, 
    RegisterPage, 
    EmployeesPage, 
    AddEmployeePage, 
    StatusPage,
    EmployeePage
} from './pages';

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
    {
        path: Paths.employeeAdd,
        element: <AddEmployeePage />,
    },
    {
        path: `${Paths.status}/:status`,
        element: <StatusPage />,
    },
    {
        path: `${Paths.employee}/:id`,
        element: <EmployeePage />,
    },
]);
