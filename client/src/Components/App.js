import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SEProfile from './Pages/SEProfile';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import Header from './CommonComponents/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div id='main' >
            <Switch>
              <Route path='/' component={HomePage} exact/>
              <Route path='/se' component={SEProfile}/>
              <Route path='/howitwork' component={ResultPage}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
