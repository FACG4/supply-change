import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSelect from 'react-select';

class Select extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;
    const { name, placeholder, options, isMulti, isClearable } = this.props;

    return (
      <ReactSelect
        name={name}
        value={selectedOption}
        onChange={this.handleChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isClearable={isClearable}
      />
    );
  }
}
export default Select;
