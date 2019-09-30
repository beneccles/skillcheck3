import React, {Component} from 'react'
import axios from 'axios'

import './Post.css';

export default class Post extends Component {
  constructor() {
    super() 
    this.state = {
      username: "",
      profile_pic: "",
      img: "",
      content: "",
      title: ""
    }
  }

  getPost = async () => {
    const {postid} = this.props.match.params;
    const res = await axios.get(`/api/post/?id=${postid}`)
    
    console.log(res.data[0].title)
    this.setState({
      username: res.data[0].username,
      profile_pic: res.data[0].profile_pic,
      img: res.data[0].img,
      content: res.data[0].content,
      title: res.data[0].title
    })
  }

  componentDidMount(){
    this.getPost()
  }
  render() {
    
    return (
    <div className="Post">
      <div className="postHead juxatpose">
      <h1>{this.state.title}</h1>
      <div className="authorSpot">
      <h2>{this.state.username}</h2>
      <div className="profilePicSmall" style={{ backgroundImage: `url('${this.state.profile_pic}')` }}></div>
      </div>
      </div>
      <div className="postBody juxatpose">
        <div className="postPicture" style={{ backgroundImage: `url('${this.state.img}')` }}>

        </div>
        <div className="postText">
          {this.state.content}
        </div>
      </div>

    </div>
    )
  }
}