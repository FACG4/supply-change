import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';


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
      <Form handleChange = {this.handleChange } handleSelect = {this.handleSelect} SERegions={SERegions}/>

    );
  }
}

export default SearchForm;
