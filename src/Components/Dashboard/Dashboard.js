import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Post from '../Post/Post';

import './Dash.css';
export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      myPosts: true,
      posts: [],
      loading: true,
      user: {}
    }
  }

  async componentDidMount() {
    this.getPosts()
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value //Similar to ${}. Targets the passed in key specifically.
    })
  }

  handleCheck = (e) => {
    const { checked } = e.target
    this.setState({
      myPosts: checked
    })
    this.getPosts()

  }

  getPosts = async () => {
    const res = await axios.get(`/api/posts/?me=${this.state.myPosts}`)

    if (res.data) {
      this.setState({posts: res.data})
      this.props.history.push('/dashboard')
    }
  }

  getSearch = async () => {
    const {search} = this.state
    try {
      const res = await axios.get(`/api/posts?search=${search}`)
      this.setState({ posts: res.data })

    } catch (err) {
      console.log(err)
    }
  }

  reset = async () => {
    this.setState({myPosts: false})
    const res = await axios.get(`/api/posts/?me=${this.state.myPosts}`)

    if (res.data) {
      this.setState({posts: res.data, loading: false, search: ''})
      this.props.history.push('/dashboard')
    }
  }

  renderPosts = () => {
    const display = this.state.posts.map((el, index) => {
      return (
        <Link id="smallPost" to={`/post/${el.post_id}`} key={index}>
          <div className="postBox">
          <h1 id="postTitle">{el.title}</h1>
          <div className="profileTag">
            <p id="authorPost">by {el.username}</p>
            <div className="profilePicSmall" style={{ backgroundImage: `url('${el.profile_pic}')`}}>
            </div>
          </div>
          </div>
        </Link>
      )
    })

    return display;
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="content_box dashBar">
          <div className="dashSearch">
            <input type="text" onChange={(e) => this.handleChange(e, 'search')} placeholder="Search by Title" />
            <button onClick={() => this.getSearch()}>Search</button>
            <button onClick={() => this.getPosts()}>Reset</button>
          </div>
          <div className="dashCheck">
            <input type="checkbox" defaultChecked={this.state.myPosts} onChange={(e) => this.handleCheck(e)} />
          </div>
        </div>
        <div className="content-box posts">
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}