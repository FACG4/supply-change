import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Result from './Result';
import filterData from './filter_data';

import './style.css';

class ResultPage extends Component {
  state = {
    allContracts: [],
    filtereContracts:[],
    SERegions: [],
    title: '',
    selectedRegion: '',
    SEId:''
  }

changeState = (key, value) => {
  value = value ? value : ''
    this.setState({
      ...this.state,
      [key]:value
    }, () => {
      const { allContracts, selectedRegion, title } = this.state
      const filteredRegion = filterData(allContracts, 'contract_region', selectedRegion.value)
      const filteredTitle = filterData(filteredRegion, 'title', title)
      this.setState({
        ...this.state,
        filtereContracts: filteredTitle
      })
    })
  }

  fetch = () => {
    const { SEId } = this.state
    axios.post('/search',{SEId}).then(response => {
      const { contracts, SERegions } = response.data;
      this.setState({
        ...this.state,
        allContracts:contracts,
        filtereContracts:contracts,
        SERegions,
      });
    });
  }

  componentDidMount() {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    if (info) {
      const {id} = info
    this.setState({
      ...this.state,
      SEId:id
    }, () => this.fetch())
  }
}

  render() {
    const { handleChange } = this.props
    const { filtereContracts, SERegions } = this.state

    return (
      <Result filtereContracts = { filtereContracts } SERegions = { SERegions } changeState ={ this.changeState }/>
    );
  }
}

export default ResultPage;
