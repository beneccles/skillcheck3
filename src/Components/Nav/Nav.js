import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import { updateUser, logout } from '../../ducks/reducer'
import { connect } from 'react-redux'
import homeImage from '../../assets/home_img.png'
import logoutImage from '../../assets/logout.png'
import newPost from '../../assets/new_post.png'


import './Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      id: null,
      profile: ""
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/user')
    if (res.data) {
      const {username, userId, profile_pic} = res.data
      this.setState({
        username: username, id: userId, profile: profile_pic
      })
    }


  }

  logout = () => {
    axios.post('/api/auth/logout').then(res => logout())
  }

  render() {
    console.log(this.props)
    if (this.props.location.pathname !== '/') { // Only show the account control buttons if logged in. (in other words, if we are on the login screen, don't show these buttons)
      return (
        <div className="Nav">
          <div className="upperNav">
            <div id="profile">
              <div className="profilePic" style={{ backgroundImage: `url('${this.state.profile}')` }}></div>
            </div>
            <div id="navDash">
              <Link id="navDashTop" to="/dashboard"><img className="navImage" src={homeImage} alt="Home" /></Link>
              <Link to="/new"><img className="navImage" src={newPost} alt="New Post" /></Link>
            </div>
          </div>
          <div id="logoutButton">
            <Link id="logoutButton" to="/"><img className="navImage" src={logoutImage} onClick={this.logout} alt="logout" /></Link>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.username,
    id: reduxState.id,
    profile: reduxState.profile
  }
}
// In order for props.match or this.props.location to work, you need to include withRouter
export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav))