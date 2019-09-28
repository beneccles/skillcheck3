import React, {Component} from 'react'

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

        </div>
        <div className="dashCheck">

        </div>
      </div>
      <div className="content-box posts">

      </div>
    </div>
    )
  }
}