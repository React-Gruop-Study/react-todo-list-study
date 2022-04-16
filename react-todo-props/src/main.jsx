import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/App.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Main} from './page/Main'

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
)
