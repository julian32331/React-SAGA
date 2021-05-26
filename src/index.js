import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure-store';

import './index.css';
import App from './App';

const store = configureStore({});

ReactDOM.render(
    <AppContainer id="app-content">
        <App store={store}/>
    </AppContainer>,
    document.getElementById('root')
);

registerServiceWorker();
