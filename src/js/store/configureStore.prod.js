import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import AppReducers from '../reducers';

export default function configureStore(preloadedState) {
  return createStore(
    AppReducers,
    preloadedState,
    applyMiddleware(thunk, promise, reduxImmutableStateInvariant())
  );
};
