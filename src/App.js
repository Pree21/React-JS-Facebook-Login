import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook'
class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
            <h1>Facebook Albums</h1>
        </header>
          <Facebook/>
      </div>
    );
  }
}

export default App;
