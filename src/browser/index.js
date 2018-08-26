import React from 'react';
import {hydrate} from 'react-dom';
// import configureStore from './config/store';
// import App from '../containers/App';
// import Hello from './components/Hello';
// import {BrowserRouter} from 'react-router-dom';
import configureStore from './config/store';
import App from './containers/App';
import './index.css';

// import './index.css';

const store = configureStore();

hydrate(<App store={store} />, document.getElementById('app-root'));
