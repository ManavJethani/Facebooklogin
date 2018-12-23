import React, { Component } from 'react';
import './App.css';
import Facebook from './Component/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my page </h1>
          <Facebook />
        </header>
      
      </div>
    );
  }
}

export default App;
