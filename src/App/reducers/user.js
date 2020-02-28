import types from '../actions/types';

// Estado inicial
const initialState = {
  username: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USERNAME:
      return {
        username: action.username
      };
    default:
      return state;
  }
}

export default reducer;
 