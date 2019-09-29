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
      myPosts: false,
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
    if (e.target.value === 'on') {
      this.setState({myPosts: true})
    } else {
      this.setState({myPosts: false})
    }

  }

  getPosts = async () => {
    console.log(this.state.myPosts, 'getPosts')
    const res = await axios.get(`/api/posts/${this.state.myPosts}`)
    console.log('res', res)
    if (res.data) {
      this.setState({posts: res.data})
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

  renderPosts = () => {
    const display = this.state.posts.map((el, index) => {
      console.log(el)
      return (
        <Link to={`/post/${el.post_id}`} key={index}>
          <h1>{el.title}</h1>
          <div className="profileTag">
            <h2>{el.username}</h2>
            <div className="profilePic" style={{ backgroundImage: `url('${el.profile_pic}')`}}>
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
            <input type="checkbox" onChange={(e) => this.handleCheck(e)} />
          </div>
        </div>
        <div className="content-box posts">
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}