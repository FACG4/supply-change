import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSelect from 'react-select';

class Select extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({
      ...this.state,
      selectedOption
    });
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <ReactSelect
      {...this.props}
      value={selectedOption}
      onChange={this.handleChange}
      />
    );
  }
}
export default Select;
