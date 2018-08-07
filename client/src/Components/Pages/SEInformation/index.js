import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
    employeesNumber: '',
    turnover: '',
    contractSize: '',
    socialDescription: '',
    workDistance: '',
    workRegions: '',
    policyArray: [],
    socialImpactArray: [],
    logoLink: 'https://upload.wikimedia.org/wikipedia/commons/6/62/USPHS_Commissioned_Corps_insignia.png',
    buttonText: 'Save & Continue',
    redirect:false
  }

  changeState = ({target}) => {
    const { value, name } = target
    this.setState ({
      ...this.state,
      [name]: value
    },()=>{
    })
  }
  sendData = () => {
    const {SEId} = this.props
    axios.post('/userdetails',{...this.state, SEId}).then(response => {
      response.data === 'success' ? this.setState ({
              ...this.state,
              redirect : true
            }) : this.setState ({
                    ...this.state,
                    error : 'Sorry, an error in inserting data'
                  })
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
      this.state.redirect ?
        <Redirect to='/profile' /> :
        (
      <div className = 'SEForm'>
        <ProgressTracker activePageIndex = { this.state.activePageIndex }/>
        <Switch changeState = { this.changeState } activePageIndex = { this.state.activePageIndex }/>
        <div className ='errMsg'>{this.state.error}</div>
        <Button children = {this.state.buttonText} className = 'generalButton' onClick = { this.indexIncrement }/>
      </div>
    )
    );
  }
}

export default SEInofrmation;
