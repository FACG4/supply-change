
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SearchForm from './SearchForm';
import Contract from './Contract';

class Result extends Component {
  render() {
    return (

      <main id='main'>
        <div className='contract-search-sec'>
          <h4 className='contract-search-sec__title'>Explore Contracts</h4>
          <SearchForm />
        </div>
        <div className='contract-result'>
          <div className='contract-result-summary'>
            <h4 className='contract-result-summary__number'>15 Contracts found</h4>
          </div>
          <Contract />
        </div>
      </main>

    );
  }
}

export default Result;
