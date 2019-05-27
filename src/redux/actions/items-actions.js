
export const ITEMS_LIST_TYPES = {
    SHOW_ITEMS_LIST: 'SHOW_ITEMS_LIST',
    ADD_TO_FAV: 'ADD_TO_FAV'
};


export const showItemsListAC = items => ({
    type: ITEMS_LIST_TYPES.SHOW_ITEMS_LIST,
    payload: {
        items
    }
});

export const addToFavAC = (id, status) => ({
    type: ITEMS_LIST_TYPES.ADD_TO_FAV,
    payload: {
        id, status
    }
});

