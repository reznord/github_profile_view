import curry from 'lodash/curry';

export const makeCacheChecker = curry(
  (object, key) => (state, params) => Object.prototype.hasOwnProperty.call(
    state[object].cache[key],
    JSON.stringify(params),
  ),
);
