import 'regenerator-runtime/runtime';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import rootReducer from '../reducers';
import mySaga from '../sagas';
import {loadTheme} from '../loadTheme';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const persistedState = {app: {theme: loadTheme()}};

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(mySaga);

  return store;
};

export default configureStore;
