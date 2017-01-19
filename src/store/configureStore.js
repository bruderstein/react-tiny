import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import reduxPromise from 'redux-promise';


export default function configureStore(initialState) {
  
  const middlewares = [reduxPromise];
  
  // This adds the console logger for the actions, but only in dev mode
  // in production this is compiled away
  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }
  
  const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares))
  );
  
  return store;
}