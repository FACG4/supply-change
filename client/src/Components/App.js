import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './CommonComponents/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main id='main'>
        </main>
      </div>
    );
  }
}

export default App;
