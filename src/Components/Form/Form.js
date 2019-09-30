import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
      img: ""
    }
  }

  createPost = () => {
    axios.post('/api/post/create', this.state).then((res) => {
      this.props.history.push('/dashboard')
      swal.fire({type: 'success', text: res.data.message})
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value //Similar to ${}. Targets the passed in key specifically.
    })
  }

  render() {
    return (
      <div className="Form">
        <div id="formHeader">
          <h1>New Post</h1>
        </div>
        <div id="formTitle">
          <p>Title:</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'title')} />
        </div>
        <div id="formImage" style={{ backgroundImage: `url('${this.state.img}')` }}>

        </div>
        <div id="formURL">
          <p>Image URL:</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'img')}/>
        </div>
        <div id="formContent">
          <p>Content:</p>
          <textarea onChange={(e) => this.handleChange(e, 'content')}></textarea>
        </div>
        <div id="formFooter">
          <button onClick={() => this.createPost()}>Post</button>
        </div>
      </div>
    )
  }
}