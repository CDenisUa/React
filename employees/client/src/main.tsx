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
// Components
import { Auth } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <Auth>
                    <RouterProvider router={router} />
                </Auth>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
