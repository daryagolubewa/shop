import { ITEMS_LIST_TYPES } from '../actions/items-actions'

const initialState = {
    items: []
}

export default function showItemsListReducer(state = initialState, {type, payload}) {
  // debugger;
    console.log('state', state);
    switch (type) {
        case ITEMS_LIST_TYPES.SHOW_ITEMS_LIST: {
           return {
               items: payload.items
           }
        }
        // case ITEMS_LIST_TYPES.ADD_TO_FAV: {
        //     return state.map(elem =>
        //         (elem.id === payload.id)
        //     ? {...elem, isFav: payload.status}
        //     : elem
        //     )
        // }
        default:
            return state
    }
}
