import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BusinessInfomation from './businessinfo';

import './style.css';

class BusinessInfo extends Component {

  render() {
    const { changeState } = this.props;
    return (
      <BusinessInfomation changeState={changeState} />
    );
  }
}

export default BusinessInfo;
