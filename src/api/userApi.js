import request from 'axios';
import { BASE_USERS } from './../constants/Base';
import { makeCacheChecker } from './../util/data';
import * as userActions from './../actions/userActions';
import * as storeSelector from './../store/storeSelector';

const makeUserCacheChecker = makeCacheChecker('users');

export function getUserDetails(userName) {
  return (dispatch, getState) => {
    const state = getState();
    const params = { userName };

    const processResponse = (response) => {
      const user = response.data;
      const data = {
        details: user,
      };
      dispatch(userActions.receivedUserDetails(params, response, data));
    };

    const isUserCached = makeUserCacheChecker('details');
    const cache = !isUserCached(state, params);

    if (cache) {
      dispatch(userActions.fetchUserDetails());
      request
        .get(`${BASE_USERS}/${userName}`)
        .then(response => processResponse(response))
        .catch(error => console.error(error, error.stack));
    } else if (!cache) {
      const cachedSummary = storeSelector.getCachedUserData(state, params);
      processResponse(cachedSummary);
    }
  };
}

export function getUserFollowers(userName) {
  return (dispatch, getState) => {
    const state = getState();
    const params = { userName };

    const processResponse = (response) => {
      const followersData = response.data;
      const data = {
        followers: followersData,
      };
      dispatch(userActions.receivedUserFollowers(params, response, data));
    };

    const isUserFollowersCached = makeUserCacheChecker('followers');
    const followers = !isUserFollowersCached(state, params);

    if (followers) {
      dispatch(userActions.fetchUserFollowers());
      request
        .get(`${BASE_USERS}/${userName}/followers`)
        .then(response => processResponse(response))
        .catch(error => console.error(error, error.stack));
    } else if (!followers) {
      const cachedSummary = storeSelector.getCachedUserFollower(state, params);
      processResponse(cachedSummary);
    }
  };
}
