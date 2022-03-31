import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  CombinedState,
} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers/root.reducer';

const configureStore = () => {
  const composed = [applyMiddleware(logger)];

  const store = createStore(rootReducer, compose(...composed));
  return store;
};

export default configureStore;
