import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import './index.css';

const store = configureStore();

render(<App store={store} />, document.getElementById('app-root'));
