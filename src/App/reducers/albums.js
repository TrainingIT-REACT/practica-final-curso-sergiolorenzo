import { getAlbums, getAlbum } from '../actions/albums';

import { setAlbHistory } from '../actions/history';

// Estado inicial
const initialState = {
  isLoading: false,
  albums: [],
  error: false,
  isLoadingAlbum: false,
  album: [],
  errorAlbum: false
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String (getAlbums.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false
      }
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
      case String (getAlbum.pending):
        return {
          ...state,
          isLoadingAlbum: true,
          errorAlbum: false
        };
      case String(getAlbum.fulfilled):
        setAlbHistory(action.payload[0]);
        return {
          ...state,
          isLoadingAlbum: false,
          album: action.payload,
          errorAlbum: false
        }
      case String(getAlbum.rejected):
        return {
          ...state,
          isLoadingAlbum: false,
          errorAlbum: true
        }
    default:
      return state;
  }
}

export default reducer;