import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import HomeReducer from './HomeReducer';
import RoverReducer from './RoverReducer';

const ownReducers = {
  Apod: HomeReducer,
  Rover: RoverReducer,
  routing: routerReducer, // This reducer is handle the synch between the routes and store
  toastr: toastrReducer    // This reducer is oncharge of handle the toastr messages
};

const AppReducers = combineReducers(ownReducers);

export default AppReducers;
