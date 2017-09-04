export const getUserData = state => state.users.details;

export const getCachedUserData = (state, params) => state.users.cache.details[
      JSON.stringify(params)
    ];

export const getUserFollowers = state => state.users.followers;

export const getCachedUserFollower = (state, params) => state.users.cache.followers[
      JSON.stringify(params)
    ];
