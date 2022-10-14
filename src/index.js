import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <AuthProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </AuthProvider>
   , document.getElementById('root'));

serviceWorker.unregister();
