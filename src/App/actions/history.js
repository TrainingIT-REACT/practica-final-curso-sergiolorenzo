import { createAsyncAction} from "redux-promise-middleware-actions";

export const setSongHistory = createAsyncAction("SONG", async (song) => {
    return song;
});

export const setAlbHistory= createAsyncAction("ALBUM", async (album) => {
    return album;
});

export const getSongHistory = createAsyncAction("SONGSHISTORY", async () => {

});

export const getAlbHistory = createAsyncAction("ALBUM", async () => {
    
});