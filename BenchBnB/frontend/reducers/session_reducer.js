import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullSession = {
    id: null
}

export default (state = _nullSession, action) => {
    Object.freeze(state)
    // debugger
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            debugger
            const newState =  Object.assign({}, {id: action.user.id})
            return newState
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state
    }
}