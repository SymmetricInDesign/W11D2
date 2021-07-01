import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component{

    render(){
        return (
            this.props.user ?
                <div>
                    <p>Welcome, {this.props.user.username}!</p>
                    <button onClick={this.props.logout}>Log Out</button>
                </div> 
            :
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <br />
                    <Link to="/login">Log In</Link>
                </div>
        )
    }

}

export default Greeting