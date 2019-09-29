import React, { Component } from 'react'
import axios from 'axios';
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

  getPosts = async () => {

    const res = await axios.get('/api/posts')
    if (res.data.posts) {
      const { posts } = res.data
      this.setState({ posts })
    }
  }

  getSearch = async () => {
    const {search} = this.state
    console.log(search)
    try {
      const res = await axios.get(`/api/posts?search=${search}`)
      const { posts } = res.data
      this.setState({ posts })
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="content_box dashBar">
          <div className="dashSearch">
            <input type="text" onChange={(e) => this.handleChange(e, 'search')} placeholder="Search by Title" />
            <button onClick={() => this.getSearch()}>Search</button>
            <button>Reset</button>
          </div>
          <div className="dashCheck">
            <input type="checkbox" />
          </div>
        </div>
        <div className="content-box posts">

        </div>
      </div>
    )
  }
}