// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Components
import App from './components/app/App';
// Styles
import '@/styles/main.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
