import { getSongs, getSong , getRandomSongs} from '../actions/songs';

// Estado inicial
const initialState = {
  isLoading: false,
  songs: [],
  error: false,
  isLoadingSong: false,
  song: [],
  errorSong: false,
  isLoadingRandomSongs: false,
  randomSongs: [],
  errorRandomSongs: false
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case String (getSongs.pending):
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case String(getSongs.fulfilled):
        return {
          ...state,
          isLoading: false,
          songs: action.payload,
          error: false
        }
      case String(getSongs.rejected):
        return {
          ...state,
          isLoading: false,
          error: true
        }
      case String (getSong.pending):
        return {
          ...state,
          isLoadingSong: true,
          errorSong: false
        };
      case String(getSong.fulfilled):
        return {
          ...state,
          isLoadingSong: false,
          song: action.payload,
          errorSong: false
        }
      case String(getSong.rejected):
        return {
          ...state,
          isLoadingSong: false,
          errorSong: true
        }
      case String (getRandomSongs.pending):
        return {
          ...state,
          isLoadingRandomSongs: true,
          errorRandomSongs: false
        };
      case String(getRandomSongs.fulfilled):
        return {
          ...state,
          isLoadingRandomSongs: false,
          randomSongs: action.payload,
          errorRandomSongs: false
        }
      case String(getRandomSongs.rejected):
        return {
          ...state,
          isLoadingRandomSongs: false,
          errorRandomSongs: true
        }
    default:
      return state;
  }
}

export default reducer;