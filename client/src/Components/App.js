import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Signup from './Pages/Signup';
import MainInfo from './Pages/SEProfile/MainInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainInfo />
      </div>
    );
  }
}

export default App;
