import {combineReducers} from 'redux'
import errorsReducer from './errors_reducer'
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer' 


export default combineReducers({
    errors: errorsReducer,
    entities: entitiesReducer,
    session: sessionReducer
})
