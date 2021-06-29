import {connect} from "react-redux"
import Greeting from "./greeting"
import {deleteSession} from "../../actions/session_actions"

const mSTP = (state) => {
    return {user : state.entities.users[state.session.id]}
}

const mDTP = dispatch => (
    {logout: () => (dispatch(deleteSession()))}
)

export default connect(mSTP, mDTP)(Greeting)