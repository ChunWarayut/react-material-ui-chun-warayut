import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* when none of the above match, <NoMatch> will be rendered */}
    <Route component={NoMatch} />
  </Switch>
)
