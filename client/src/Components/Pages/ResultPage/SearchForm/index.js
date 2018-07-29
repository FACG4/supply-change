import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from './../../../CommonComponents/Select';

import './style.css';

class SearchForm extends Component {
  state={
    options:[
      { value: 'GL', label: 'Greater London' },
      { value: 'SE', label: 'South East' },
      { value: 'SW', label: 'South West' },
      { value: 'WM', label: 'West Midlands' },
      { value: 'NW', label: 'North West' },
      { value: 'NE', label: 'North East' },
      { value: 'YH', label: 'Yorkshire and the Humber' },
      { value: 'EM', label: 'East Midlands' }
    ]
  }
  render() {
    return (
      <form className='searchContractForm'>
        <div className='contractTitleDiv'>
          <input type='text' placeholder='Job title, keywords or company name' className='contractTitleDiv__input'/>
          <i className='far fa-keyboard'></i>
        </div>
        <div className='selectCityDiv'>
          <Select options={this.state.options} placeholder="Select contract region..." isMulti={false} isClearable={true} name='city'/>
        </div>
        <div className='searchBtnDiv'>
          <button className='searchBtn'type='submit'><i className='fas fa-search'></i></button>
        </div>
      </form>

    );
  }
}

export default SearchForm;
