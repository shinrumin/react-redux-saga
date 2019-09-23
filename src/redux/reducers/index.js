import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import toggleDialog from './dialogReducer'

export default combineReducers({
    tasks: taskReducer,
    modal: toggleDialog
})
