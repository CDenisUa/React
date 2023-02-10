// Core
import React from 'react';
import ReactDOM from 'react-dom/client'
// Components
import App from './components/App/App'
// Styles
import '@/styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
