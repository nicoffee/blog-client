import 'regenerator-runtime/runtime';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import rootReducer from '../reducers';
import mySaga from '../sagas';
// import {loadTheme} from '../utils/helpers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const persistedState = window.__PRELOADED_STATE__; //{app: {theme: loadTheme(), isFetching: true}};
delete window.__PRELOADED_STATE__; // Allow the passed state to be garbage-collected

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
