import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MainInfo from './MainInfo';
import Places from './PlacesToWork';

class SEProfile extends Component {
  render(){
    return(
      <div id="main">
      <MainInfo />
      <Places />
      </div>
    )
  }
}

export default SEProfile;
