import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import rootSaga, { helloSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware, createLogger({
    collapsed: true,
  })),
);

export default (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    enhancer,
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

