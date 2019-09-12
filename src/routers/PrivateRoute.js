/*
  For now let's go ahead and quickly recap what we did and make a comment right here. 
  We set up private route which is really just a wrapper around route and the whole 
  point of using it is to add some conditional logic in it allows us to determine if 
  the user is authenticated or not. And we can take the correct action either rendering 
  the private stuff or redirecting them over to a public page. I'm going to wrap this 
  one up over inside of the terminal. We can go ahead and shut things down and use good 
  status to view all the changes we can use get add dot to add them to the next commit 
  clear the output so it's easier to read and then we're going to use get commit to make 
  that commit get commit with the flag actually is completely redundant since we already 
  added all of the files we just need them right here add private routes. I'm going to 
  make the commit and I'm going to avoid pushing or deploying. You are more than welcome 
  to. But since we've already gone through the process I'm not going to waste your time 
  here going through.
*/
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from "../components/pages/Header"

export const PrivateRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route { ...rest } component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component { ...props } />
      </div>
    ) : (
      <Redirect to='/' />
    )
  )} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)