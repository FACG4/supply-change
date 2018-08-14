import React, { Component } from 'react';
import Select from 'react-select';

import signal from './imgs/signal.png';
import binarycode from './imgs/binarycode.png';
import director from './imgs/director.png';
import network from './imgs/network.png';

class BusinessInfomation extends Component {
  state = {
    selectedTrade: null,
    optionTrade : [
      {
        value: 'Catering',
        label: 'Catering'
      }, {
        value: 'Cleaning',
        label: 'Cleaning'
      }, {
        value: 'Gardening & Landscaping',
        label: 'Gardening & Landscaping'
      }
    ],
    selectedCity: null,
    optionCity : [
      {
        value: 'London',
        label: 'London'
      }, {
        value: 'Birmingham',
        label: 'Birmingham'
      }, {
        value: 'Leeds',
        label: 'Leeds'
      }, {
        value: 'Glasgow',
        label: 'Glasgow'
      }, {
        value: 'Sheffield',
        label: 'Sheffield'
      }, {
        value: 'Bradford',
        label: 'Bradford'
      }, {
        value: 'Liverpool',
        label: 'Liverpool'
      }, {
        value: 'Edinburgh',
        label: 'Edinburgh'
      }, {
        value: 'Edinburgh',
        label: 'Edinburgh'
      }, {
        value: 'Manchester',
        label: 'Manchester'
      }, {
        value: 'Bristol',
        label: 'Bristol'
      }, {
        value: 'Kirklees',
        label: 'Kirklees'
      }, {
        value: 'Fife',
        label: 'Fife'
      }, {
        value: 'Wirral',
        label: 'Wirral'
      }
    ]
  }

  updateLocation = (selectedCity) => {
    this.setState({
      ...this.state,
      selectedCity:selectedCity
    })
    this.props.changeState({target:{name:'companyLocation', value: selectedCity.value}})

  }

  updateTrade = (selectedTrade) => {
    this.setState({
      ...this.state,
      selectedTrade:selectedTrade
    })
    this.props.changeState({target:{name:'tradeType', value: selectedTrade.value}})
  }

  render() {
    const { selectedTrade, optionTrade, selectedCity, optionCity } = this.state;
    return (
      <div >
        <div className='topForm'>
          <h3 className='header1'>
        Tell Us About Your Business
          </h3>
        </div>

        <div className='align'>
          <div className='grid'>
            <div className='form BusinessInfo'>
              <div className='form__field'>
              <Select className='form__input' value = { selectedCity } onChange = { this.updateLocation }
              options = { optionCity } placeholder = 'Choose company location'/>
              </div>

              <div className='form__field'>
                <input id='CompanyAddress' type='text' name='companyAddress' onChange={this.props.changeState}
                  className='form__input' placeholder='Company Address' required />
                <label htmlFor='CompanyAddress'>
                  <img src={signal} className='icons' alt='signal' />
                  <span className='hidden' />
                </label>
              </div>

              <div className='form__field'>
                <input id='SIC-Code' type='text' name='SICCode' onChange={this.props.changeState}
                  className='form__input' placeholder='SIC Code' required />
                <label htmlFor='SIC-Code'>
                  <img src={binarycode} className='icons' alt='binarycode' />
                  <span className='hidden' />
                </label>
              </div>

              <div className='form__field'>
                <input id='Director' type='text' name='director' onChange={this.props.changeState}
                  className='form__input' placeholder='Director' required />
                <label htmlFor='Director'>
                  <img src={director} className='icons' alt='binarycode' />
                  <span className='hidden' />
                </label>
              </div>

              <div className='form__field'>
                <input id='CompanyStructure' type='text' name='companyStructure' onChange={this.props.changeState}
                  className='form__input' placeholder='Company Structure' required />
                <label htmlFor='CompanyStructure'>
                  <img src={network} className='icons' alt='network' />
                  <span className='hidden' />
                </label>
              </div>

              <div className='form__field'>
                <Select className='form__input' value = { selectedTrade } onChange = { this.updateTrade }
                  options = { optionTrade } placeholder = 'Choose your type of trade:'/>
              </div>

                <textarea id='DescriptionOfTheCompany ' type='text' name='companyDescription' onChange = { this.props.changeState }
                  className='form__input' placeholder='Description of the company' required />
            </div>
          </div>
        </div>
      </div>
    );
  };
};
export default BusinessInfomation;
