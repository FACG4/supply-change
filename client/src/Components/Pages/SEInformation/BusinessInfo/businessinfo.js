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
    ]
  }

  updateTrade = (selectedTrade) => {
    this.setState({
      ...this.state,
      selectedTrade:selectedTrade
    })
    this.props.changeState({target:{name:'tradeType', value: selectedTrade.value}})
  }

  render() {
    const { selectedTrade, optionTrade } = this.state;
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
                <input id='CompanyLocation' type='text' name='companyLocation' onChange={this.props.changeState}
                  className='form__input' placeholder='Company Location' required />
                <label htmlFor='CompanyLocation'>
                  <img src={signal} className='icons' alt='signal' />
                  <span className='hidden' />
                </label>
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
                  className='form__input' placeholder='SIC Code:' required />
                <label htmlFor='SIC-Code'>
                  <img src={binarycode} className='icons' alt='binarycode' />
                  <span className='hidden' />
                </label>
              </div>

              <div className='form__field'>
                <input id='Director' type='text' name='director' onChange={this.props.changeState}
                  className='form__input' placeholder='Director:' required />
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

              <div className='form__field text__area'>
                <textarea id='DescriptionOfTheCompany ' type='text' name='companyDescription' onChange = { this.props.changeState }
                  className='form__input' placeholder='Description of the company' required />
              </div>

              <div className='form__field SaveBtn'>
                <input type='submit' value='Save & Continue' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
export default BusinessInfomation;
