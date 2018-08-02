import React, { Component } from 'react';
import './App.css';
import BusinessInfo from './Pages/SEInformation/BusinessInfo'
import Header from './CommonComponents/Header'
import Supported from './Pages/HomePage/Supported'
import LogIn from './CommonComponents/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        < LogIn />
      </div>

    );
  }
}

export default App;
