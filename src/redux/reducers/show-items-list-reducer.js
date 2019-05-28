import { ITEMS_LIST_TYPES } from '../actions/items-actions'

const initialState = {
    items: []
}

export default function showItemsListReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ITEMS_LIST_TYPES.SHOW_ITEMS_LIST: {
           return {
               items: payload.items
           }
        }
        case ITEMS_LIST_TYPES.ADD_TO_FAV: {
            return {
                items: state.items.map(elem =>
                    (elem.id == payload.id) ?
                        {...elem, inFav: payload.status} : elem),
            };
        }

        default:
            return state
    }
}
