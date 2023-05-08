// Core
import { createBrowserRouter } from 'react-router-dom';
// Components
import App from './components/app/App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    }
]);
