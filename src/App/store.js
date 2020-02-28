import { createStore, applyMiddleware, combineReducers  } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
import albums from './reducers/albums';
import songs from './reducers/songs';
import user from './reducers/user';
import albumHistory from './reducers/history/albumHistory';
import songHistory from './reducers/history/songHistory';

const store = createStore(
    combineReducers({ albums, songs, user, albumHistory, songHistory }),
    applyMiddleware(promise)
);

export default store;