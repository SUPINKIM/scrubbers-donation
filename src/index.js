import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/globalStyles';
import CustomHelmet from 'helemt';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <CustomHelmet />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
