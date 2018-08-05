import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BusinessInfo from './BusinessInfo';
import ProgressTracker from './ProgressTracker';
import Turnover from './Turnover';
import Switch from './switchComponents';
import Button from './../../CommonComponents/Button';

import'./style.css'

class SEInofrmation extends Component {
  state = {
    activePageIndex: 0,
    companyLocation: '',
    companyAddress: '',
    SICCode: '',
    director: '',
    companyStructure: '',
    tradeType: '',
    companyDescription: '',
    businessSize: '',
    turnover: '',
    contractSize: ''
  }

  changeState = ({target}) => {
    const {value, name}= target
    this.setState ({
      ...this.state,
      [name]: value
    })
  }

  indexIncrement = (e) => {
    this.setState ({
      ...this.state,
      activePageIndex: this.state.activePageIndex +1
    })
  }

  render() {

    return (
      <div className='SEForm'>
        <ProgressTracker activePageIndex={this.state.activePageIndex}/>
        <Switch changeState={this.changeState} activePageIndex={this.state.activePageIndex}/>
        <Button children='Save & Continue' className='generalButton' onClick={this.indexIncrement}/>
      </div>
    );
  }
}

export default SEInofrmation;
