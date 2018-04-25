import 'regenerator-runtime/runtime';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import rootReducer from '../reducers';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(mySaga);

  return store;
};

export default configureStore;
