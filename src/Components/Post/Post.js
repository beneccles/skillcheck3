import React, {Component} from 'react'

export default class Post extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }

  componentDidMount(){
    console.log(this.props.location.state)
  }
  render() {
    
    return (
    <div className="Post">
      {`Post ${this.props.match.params.postid}`}
    </div>
    )
  }
}