import initState from '../store/initialState';
import * as types from '../common/actionTypes';

export default function homeReducer(state = initState.Rover, action) {
  switch (action.type) {
    case types.FETCHING_ROVER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataFetched: true,
        errorFetching: {
          status: false,
          msg: ''
        }
      };

    case types.FETCHING_ROVER_DATA_ERROR:
      return {
        ...state,
        data: {},
        dataFetched: false,
        errorFetching: {
          status: true,
          msg: action.payload
        }
      };

    default:
      return state;
  }
}
