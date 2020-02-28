import { createAsyncAction} from "redux-promise-middleware-actions";

// export const addServerResponse = (response) => ({
//     type: types.ADD_SERVER_RESPONSE,
//     response
// });

export const getAlbums = createAsyncAction("ALBUMS", async () => {
    const res = await fetch('/albums');
    return await res.json();
});

export const getAlbum = createAsyncAction("ALBUM", async (id) => {
    const res = await fetch('/albums?id=' + id);
    return await res.json();
});
