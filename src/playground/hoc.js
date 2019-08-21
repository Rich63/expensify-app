// Higher Order Component HOC ~ A component that renders another component
// Reuse code
// Render hijacking
// Prop manupilation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

// component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
)

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please don not share!</p> }
      <WrappedComponent { ...props } />
    </div>
  )
}

// HOC
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent { ...props } /> 
        ) : ( 
          <p>Please login to view info!</p> 
        )
      }      
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(AdminInfo)

// ReactDOM.render(<AdminInfo isAdmin={ false } info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={ true } isAdmin={ true } info="These are the details" />, document.getElementById('app'))