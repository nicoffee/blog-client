import React from 'react';
import {render} from 'react-dom';
import configureStore from './utils/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();

render(<App store={store} />, document.getElementById('app-root'));
