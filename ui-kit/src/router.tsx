// Core
import { createBrowserRouter } from 'react-router-dom';
// Components
import App from '@/components/app/App';
import ReactQuery from '@/pages/react-query/ReactQuery.page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/react-query',
        element: <ReactQuery />,
    },
]);
