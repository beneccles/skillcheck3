import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


function Nav(props) {

  if (props.location.pathname !== '/') { // Only show the account control buttons if logged in. (in other words, if we are on the login screen, don't show these buttons)
    return (
      <div className="Nav">
        <Link to="/dashboard"><button>Home</button></Link>
        <Link to="/new"><button>New Post</button></Link>
        <Link to="/"><button>Logout</button></Link>
      </div>
    )
  } else {
    return null
  }
}
// In order for props.match or this.props.location to work, you need to include withRouter
export default withRouter(Nav)