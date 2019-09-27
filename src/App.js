import React from 'react';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import { withRouter } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}



export default withRouter(App);
