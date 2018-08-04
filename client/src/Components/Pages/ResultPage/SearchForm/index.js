import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Select from './../../../CommonComponents/Select';
import addoptions from './add_options';

import './style.css';

class SearchForm extends Component {

  handleSelect = (selectedRegion) => {
    this.props.changeState('selectedRegion', selectedRegion)
}

handleChange = (event) => {
this.props.changeState('title', event.target.value)
}

  render() {
    const { SERegions } = this.props;
    return (
      <form className='searchContractForm'>
        <div className='contractTitleDiv'>
          <input type='text' placeholder='Job title, keywords or company name' className='contractTitleDiv__input' onChange={this.handleChange}/>
          <i className='far fa-keyboard'></i>
        </div>
        <div className='selectCityDiv'>
          <Select options={addoptions(SERegions)} placeholder='Select contract region...' isMulti={false} isClearable={true} name='city' handleSelect={this.handleSelect}/>
        </div>
        <div className='searchBtnDiv'>
          <button className='searchBtn'type='submit'><i className='fas fa-search'></i></button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
