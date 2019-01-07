import { combineReducers } from 'redux'

import apiReducer from './apiReducer'

const rootReducer = combineReducers({
    repos : apiReducer
})

export default rootReducer;