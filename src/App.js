import React, { Component } from 'react';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src="logo.svg" className="app-logo" alt="logo" />
          <h2>welcome to react</h2>
        </div>
        <p className="app-intro">
          to get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
