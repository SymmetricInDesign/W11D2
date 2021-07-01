import {RECEIVE_BENCHES} from "../actions/bench_actions"

const benchesReducer = (state={}, action) => {
    Object.freeze(state)
    let newState
    switch(action.type){
        case RECEIVE_BENCHES:
            newState = Object.assign({}, state, action.benches)
            return newState 
        default: 
            return state
    }
} 

export default benchesReducer