import { noteReducer } from './reducers/noteREducer'
import { filterReducer } from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore, combineReducers} from 'redux'


const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

export const store = createStore(reducer, composeWithDevTools())

