import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Auth from './Components/Auth/Auth'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Auth />
      <Form />
      <Nav />
      <Post />
    </div>
  );
}

export default App;
