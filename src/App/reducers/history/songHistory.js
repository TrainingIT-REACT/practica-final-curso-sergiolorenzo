import { setSongHistory, getSongHistory } from '../../actions/history';

// Estado inicial
const initialState = {
  isLoading: false,
  songs: [],
  error: false,
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String (setSongHistory.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(setSongHistory.fulfilled):
      return {
        ...state,
        isLoading: false,
        songs: state.songs.concat(action.payload),
        error: false
      }
    case String(setSongHistory.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
      case String (getSongHistory.pending):
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case String(getSongHistory.fulfilled):
        return {
          ...state,
          isLoading: false,
          error: false
        }
      case String(getSongHistory.rejected):
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