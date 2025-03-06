import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
//npm install react-router-dom React Routerをインストールする

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
