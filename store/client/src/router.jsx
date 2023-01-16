// Core
import { createBrowserRouter } from "react-router-dom";
// Pages
import {
    Home,
    Product,
    Products
} from 'pages';
// Components
import Layout from 'components/layout/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products/:id",
                element: <Products />
            }, 
            {
                path: "/product/:id",
                element: <Product />
            }
        ]
    },
]);