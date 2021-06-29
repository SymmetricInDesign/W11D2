import GreetingContainer from "./greetings/greeting_container";
import React from 'react'
import {AuthRoute} from "../util/route_util"
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container"
import {Switch, Route} from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
    </header>
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route path="/" component={GreetingContainer}></Route>
    </Switch>
  </div>
);

export default App