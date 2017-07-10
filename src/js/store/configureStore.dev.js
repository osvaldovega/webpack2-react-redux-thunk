import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
//import DevTools from '../containers/DevTools';
import AppReducers from '../reducers';
import initialState from '../store/initialState';

export default function configureStore() {

  // Initialize Logger to see the action triggered in the  browser console
  const logger = createLogger({});

  const store = createStore(
    AppReducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, promise, reduxImmutableStateInvariant(), logger)
    )
  );

  return store;
};
