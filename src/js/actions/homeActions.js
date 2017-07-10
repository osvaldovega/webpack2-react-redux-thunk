import * as types from '../common/actionTypes';
import NasaService from '../services/NasaService';

// Service Instance
const nasaService = new NasaService();

// Fetch NASA APOD Data
function fetchApodDataSuccess(data) {
  return {
    type: types.FETCHING_APOD_DATA_SUCCESS,
    payload: data
  };
}

function fetchApodDataError(err) {
  return {
    type: types.FETCHING_APOD_DATA_ERROR,
    payload: err
  };
}

export function fetchApodData() {
  return dispatch => nasaService.getApodData()
    .then(result => dispatch(fetchApodDataSuccess(result)))
    .catch(err => dispatch(fetchApodDataError(`${err}`)));
}
