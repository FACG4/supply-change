import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

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
    contractSize: '',
    workRegions: '',
    policyArray: [],
    socialImpactArray: [],
    buttonText: 'Save & Continue',
  }

  changeState = ({target}) => {
    const { value, name } = target
    this.setState ({
      ...this.state,
      [name]: value
    })
  }
  sendData = () => {
    axios.post('/userdetails',{...this.state}).then(response => {
    });
  }

  indexIncrement = (e) => {
      this.state.activePageIndex === 5 ?
      this.sendData() : (
      this.setState ({
        ...this.state,
        activePageIndex:  1+ this.state.activePageIndex
      },()=>{
        if(this.state.activePageIndex === 5){
          this.setState ({
            ...this.state,
            buttonText: 'Submit'
          })
        }
      })
    )
  }

  render() {

    return (
      <div className = 'SEForm'>
        <ProgressTracker activePageIndex = { this.state.activePageIndex }/>
        <Switch changeState = { this.changeState } activePageIndex = { this.state.activePageIndex }/>
        <Button children = {this.state.buttonText} className = 'generalButton' onClick = { this.indexIncrement }/>
      </div>
    );
  }
}

export default SEInofrmation;
