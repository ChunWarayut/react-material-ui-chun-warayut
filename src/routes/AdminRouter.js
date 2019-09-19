import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'
import SignInSide from '../pages/SignInSide'

export default class AdminRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signinside" component={SignInSide} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    )
  }
}
