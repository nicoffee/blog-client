import express from 'express';
import request from 'request';

import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import {matchRoutes, renderRoutes} from 'react-router-config';

import routes from '../../client/routes';

const router = express.Router();

import rootReducer from '../../client/reducers';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// router.get('*', (req, res) => {
//   let context = {};
//   const content = renderToString(
//     <StaticRouter location={req.url} context={context}>
//       {renderRoutes(routes)}
//     </StaticRouter>
//   );
//   res.render('index', {title: 'Express', data: false, content});
// });

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function
      ? fetchData(store)
      : Promise.resolve(null);
  });
  return Promise.all(promises).then(data => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    res.render('index', {title: 'Express', data: store.getState(), content});
  });
});

module.exports = router;

module.exports = router;
