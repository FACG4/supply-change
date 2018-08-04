import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Contract from './Contract';
import filterData from './filter_data';


import './style.css';

class Result extends Component {
  state = {
    allContracts: [],
    filtereContracts:[],
    SERegions: [],
    title: '',
    selectedRegion: '',
    SEId:''
  }

changeState =(key, value) => {
  value = value?value:''
    this.setState({
      ...this.state,
      [key]:value
    },()=>{
      const { allContracts, selectedRegion, title } = this.state
      const filteredRegion = filterData(allContracts, 'contract_region', selectedRegion.value)
      const filteredTitle = filterData(filteredRegion, 'title', title)
      this.setState({
        ...this.state,
        filtereContracts: filteredTitle
      })
    })
}

  componentDidMount() {
    const { SEId } = this.props
    this.setState({
      ...this.state,
      SEId
    },()=>{
      const { SEId } = this.state
      axios.post('/search',{ SEId }).then(response => {
        console.log(response,'response');
        const { contracts, SERegions } = response.data;
        this.setState({
          ...this.state,
          allContracts:contracts,
          filtereContracts:contracts,
          SERegions,
        });
      });

    });
  }
  render() {
    const { SERegions, filtereContracts } = this.state
    return (
      <main >
        <div className='contract-search-sec'>
          <h4 className='contract-search-sec__title'>Explore Contracts</h4>
          <SearchForm SERegions={SERegions} handleSelect={this.handleSelect} handleChange={this.handleChange} changeState={this.changeState}/>
        </div>
        <div className='contract-result'>
          <div className='contract-result-summary'>
            <h4 className='contract-result-summary__number'>{filtereContracts.length} Contracts found</h4>
          </div>
          {filtereContracts.map(contract => <Contract contract={contract} />)}
        </div>
      </main>
    );
  }
}

export default Result;
