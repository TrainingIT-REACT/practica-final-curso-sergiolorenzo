const actions = ["UPDATE_USERNAME", "ADD_SONG_TO_HISTORY", "ADD_ALBUM_TO_HISTORY", "ADD_SERVER_RESPONSE"];

const actionsTypes = {};
actions.forEach(action => {
    actionsTypes[action] = action;
});

export default actionsTypes;