import React, { Component } from 'react';

import MainInfo from './MainInfo';
import Places from './PlacesToWork';

import './style.css';

class SEProfile extends Component {
  render() {
    return (
      <div>
        <MainInfo />
        <Places />
      </div>
    );
  }
}

export default SEProfile;
