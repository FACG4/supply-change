import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BusinessInfomation from './businessinfo';

import './style.css';

class BusinessInfo extends Component {

  render() {
    const { changeState, companyInfo } = this.props;
    console.log('0000222', companyInfo);
    return (
      <BusinessInfomation changeState={changeState} companyInfo={companyInfo} />
    );
  }
}

export default BusinessInfo;
