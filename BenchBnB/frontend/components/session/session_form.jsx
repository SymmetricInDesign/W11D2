import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this)
      this.updatePassword = this.updatePassword.bind(this)
      this.updateUsername = this.updateUsername.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updatePassword(e){
        this.setState({password: e.target.value})
    }

    updateUsername(e){
        this.setState({username: e.target.value})
    }

    render(){
        const errorLis = this.props.errors.map(error=>(<li>{error}</li>))
        return (
            <>
                <ul>{errorLis}</ul>
                { this.props.formType === "signup" ? 
                    <div>
                        <h2>Sign Up</h2><Link to="/login">Log In</Link>
                    </div> 
                    : 
                    <div>
                        <h2>Log In</h2><Link to="/signup">Sign Up</Link>
                    </div>
                }

                <form>
                    <label>Username: 
                        <input type="text" value={this.state.username} onChange={this.updateUsername}/>
                    </label>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType === "signup" ? "Sign Up" : "Log In"}</button>
                </form>
            </>
        )
    }


    //...
}

export default SessionForm