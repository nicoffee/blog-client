import React from 'react';
import {hydrate} from 'react-dom';
import Loadable from 'react-loadable';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './config/store';
import App from './components/App';

const store = configureStore();

Loadable.preloadReady().then(() => {
  hydrate(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('app-root')
  );
});
