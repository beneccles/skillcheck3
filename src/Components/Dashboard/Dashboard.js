import React, {Component} from 'react'
import Post from '../Post/Post';

import './Dash.css';
export default class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="Dashboard">
      <div className="content_box dashBar">
        <div className="dashSearch">
          <input type="text" placeholder="Search by Title" />
          <button>Search</button>
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