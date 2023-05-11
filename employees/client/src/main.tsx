// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { ConfigProvider, theme } from 'antd';
import { Provider } from "react-redux";
// Redux
import { store } from '@/redux';
// Styles
import '@/styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <RouterProvider router={router} />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
