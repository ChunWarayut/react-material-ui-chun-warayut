import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import NoMatch from '../pages/NoMatch'
import SignInSide from '../pages/SignInSide'
export default class AdminRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} isAuthed={true}/>}/>
          <Route exact path="/about" render={(props) => <About {...props} isAuthed={true}/>}/>
          <Route exact path="/signinside" render={(props) => <SignInSide {...props} isAuthed={true} />}/>
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route render={(props) => <NoMatch {...props} isAuthed={true} />}/>
        </Switch>
      </>
    )
  }
}
