import types from './types';

export const updateUsername = (username) => ({
  type: types.UPDATE_USERNAME,
  username
});
