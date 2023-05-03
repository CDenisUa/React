// Core
import { Link } from 'react-router-dom';
// Styles
import './App.css';

const App = () => (
    <ul>
        <li>
            <Link to="/react-query" className="link">
                React router
            </Link>
        </li>
        <li>
            <Link to="/react-hook-form" className="link">
                React hook form
            </Link>
        </li>
    </ul>
);

export default App;
