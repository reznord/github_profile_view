import * as types from './../constants/actionTypes';

const initialState = {
  details: {},
  followers: {},
  cache: {
    details: {},
    followers: {},
  },
  isFetching: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_DETAILS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    case types.RECEIVED_USER_DETAILS:
      return Object.assign({}, state, {
        details: action.data.details,
        cache: {
          ...state.cache,
          details: {
            ...state.cache.details,
            [action.params]: action.response,
          },
        },
        isFetching: false,
      });
    case types.FETCH_USER_FOLLOWERS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    case types.RECEIVED_USER_FOLLOWERS:
      return Object.assign({}, state, {
        followers: action.data.followers,
        cache: {
          ...state.cache,
          followers: {
            ...state.cache.followers,
            [action.params]: action.response,
          },
        },
        isFetching: false,
      });
    case types.INVALIDATE_CACHE:
      return Object.assign({}, state, {
        cache: initialState.cache,
      });
    default:
      return state;
  }
}
