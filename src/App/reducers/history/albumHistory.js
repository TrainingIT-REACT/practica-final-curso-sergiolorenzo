import { setAlbHistory, getAlbHistory } from '../../actions/history';

// Estado inicial
const initialState = {
  isLoading: false,
  alb: [],
  error: false,
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String (setAlbHistory.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(setAlbHistory.fulfilled):
      return {
        ...state,
        isLoading: false,
        alb: state.alb.concat(action.payload),
        error: false
      }
    case String(setAlbHistory.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
      case String (getAlbHistory.pending):
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case String(getAlbHistory.fulfilled):
        return {
          ...state,
          isLoading: false,
          error: false
        }
      case String(getAlbHistory.rejected):
        return {
          ...state,
          isLoading: false,
          error: true
        }
    default:
      return state;
  }
}

export default reducer;