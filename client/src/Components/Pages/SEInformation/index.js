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
    logoLink: '',
    buttonText: 'Continue',
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
  setImgLink = value => {
    this.setState ({
      ...this.state,
      logoLink: value
    },()=>{
      console.log(this.state);
    })


  }
  sendData = () => {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    const SEId = info.id
    axios.post('/userdetails',{...this.state, SEId}).then(response => {
       response.data.msg === 'success' ? this.setState ({
              ...this.state,
              redirect : true
            },()=>{
              localStorage.setItem('userInfo', JSON.stringify(response.data));
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
      <div className = 'SEForm' id='main' className='routerContainer'>
        <ProgressTracker activePageIndex = { this.state.activePageIndex }/>
        <Switch changeState = { this.changeState } activePageIndex = { this.state.activePageIndex } setImgLink= { this.setImgLink }/>
        <div className ='errMsg'>{this.state.error}</div>
        <Button children = {this.state.buttonText} className = 'generalButton' onClick = { this.indexIncrement }/>
      </div>
    )
    );
  }
}

export default SEInofrmation;
