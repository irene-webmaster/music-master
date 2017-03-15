import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <div className="app-title">Music Master</div>
        </div>
        <div>
          <input placeholder="Search an artist" />
          <button>button</button>
        </div>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;