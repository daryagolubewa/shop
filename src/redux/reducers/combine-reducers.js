import { combineReducers } from 'redux'
import showItemsListReducer from './show-items-list-reducer'

const combined = combineReducers(
    {
       showItemsListReducer
    }
)

export default combined