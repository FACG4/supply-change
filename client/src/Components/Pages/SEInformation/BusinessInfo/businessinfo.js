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
      { value: 'Bath', label: 'Bath' },
    { value: 'Birmingham', label: 'Birmingham' },
    { value: 'Bradford', label: 'Bradford' },
    { value: 'Brighton & Hove', label: 'Brighton & Hove' },
    { value: 'Bristol', label: 'Bristol' },
    { value: 'Cambridge', label: 'Cambridge' },
    { value: 'Canterbury', label: 'Canterbury' },
    { value: 'Carlisle', label: 'Carlisle' },
    { value: 'Chelmsford', label: 'Chelmsford' },
    { value: 'Chester', label: 'Chester' },
    { value: 'Chichester', label: 'Chichester' },
    { value: 'Coventry', label: 'Coventry' },
    { value: 'Derby', label: 'Derby' },
    { value: 'Durham', label: 'Durham' },
    { value: 'Ely', label: 'Ely' },
    { value: 'Exeter', label: 'Exeter' },
    { value: 'Gloucester', label: 'Gloucester' },
    { value: 'Hereford', label: 'Hereford' },
    { value: 'Kingston upon Hull', label: 'Kingston upon Hull' },
    { value: 'Lancaster', label: 'Lancaster' },
    { value: 'Leeds', label: 'Leeds' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Lichfield', label: 'Lichfield' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Newcastle upon Tyne', label: 'Newcastle upon Tyne' },
    { value: 'Norwich', label: 'Norwich' },
    { value: 'Nottingham', label: 'Nottingham' },
    { value: 'Oxford', label: 'Oxford' },
    { value: 'Peterborough', label: 'Peterborough' },
    { value: 'Plymouth', label: 'Plymouth' },
    { value: 'Portsmouth', label: 'Portsmouth' },
    { value: 'Preston', label: 'Preston' },
    { value: 'Ripon', label: 'Ripon' },
    { value: 'Salford', label: 'Salford' },
    { value: 'Salisbury', label: 'Salisbury' },
    { value: 'Sheffield', label: 'Sheffield' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'St Albans', label: 'St Albans' },
    { value: 'Stoke-on-Trent', label: 'Stoke-on-Trent' },
    { value: 'Sunderland', label: 'Sunderland' },
    { value: 'Truro', label: 'Truro' },
    { value: 'Wakefield', label: 'Wakefield' },
    { value: 'Wells', label: 'Wells' },
    { value: 'Westminster', label: 'Westminster' },
    { value: 'Winchester', label: 'Winchester' },
    { value: 'Wolverhampton', label: 'Wolverhampton' },
    { value: 'Worcester', label: 'Worcester' },
    { value: 'York', label: 'York' },
    { value: 'Armagh', label: 'Armagh' },
    { value: 'Belfast', label: 'Belfast' },
    { value: 'Londonderry', label: 'Londonderry' },
    { value: 'Lisburn', label: 'Lisburn' },
    { value: 'Newry', label: 'Newry' },
    { value: 'Aberdeen', label: 'Aberdeen' },
    { value: 'Dundee', label: 'Dundee' },
    { value: 'Edinburgh', label: 'Edinburgh' },
    { value: 'Glasgow', label: 'Glasgow' },
    { value: 'Inverness', label: 'Inverness' },
    { value: 'Perth', label: 'Perth' },
    { value: 'Stirling', label: 'Stirling' },
    { value: 'Bangor', label: 'Bangor' },
    { value: 'Cardiff', label: 'Cardiff' },
    { value: 'Newport', label: 'Newport' },
    { value: 'St. Asaph', label: 'St. Asaph' },
    { value: 'St. David\'s', label: 'St. David\'s' },
    { value: 'Swansea', label: 'Swansea' }
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
    const { selectedTrade, optionTrade, selectedCity, optionCity} = this.state;

    if(!this.props.companyInfo.registered_office_address){
      return null
    }else{
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
              <input id='companyLocation' type='text' name='companyLocation' className='form__input' value={this.props.companyInfo.registered_office_address.locality} required />
              <label htmlFor='companyLocation'>
                <img src={signal} className='icons' alt='signal' />
                <span className='hidden' />
              </label>
            </div>


              <div className='form__field'>
                <input id='CompanyAddress' type='text' name='companyAddress' className='form__input' value={this.props.companyInfo.registered_office_address.address_line_1} required />
                <label htmlFor='CompanyAddress'>
                  <img src={signal} className='icons' alt='signal' />
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
    );}
  };
};
export default BusinessInfomation;
