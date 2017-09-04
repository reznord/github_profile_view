import * as actionTypes from './../constants/actionTypes';

export function receivedUserDetails(params, response, data) {
  params = JSON.stringify(params);
  return {
    type: actionTypes.RECEIVED_USER_DETAILS,
    data,
    params,
    response,
    isFetching: false,
  };
}

export function fetchUserDetails() {
  return {
    type: actionTypes.FETCH_USER_DETAILS,
    isFetching: true,
  };
}

export function receivedUserFollowers(params, response, data) {
  params = JSON.stringify(params);
  return {
    type: actionTypes.RECEIVED_USER_FOLLOWERS,
    data,
    params,
    response,
    isFetching: false,
  };
}

export function fetchUserFollowers() {
  return {
    type: actionTypes.FETCH_USER_FOLLOWERS,
    isFetching: true,
  };
}
