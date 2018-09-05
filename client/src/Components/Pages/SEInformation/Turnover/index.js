import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TurnoverComp from './turnover';

import './style.css';

class Turnover extends Component {
  state = {
    selectedTurnover: null,
    selectedSizeContract:null
  }

  updateTurnover = (selectedTurnover) => {
    this.setState({
      ...this.state,
      selectedTurnover:selectedTurnover
    })
    this.props.changeState({target:{name:'turnover', value: selectedTurnover.value}})
  }

  updateSizeContract = (selectedSizeContract) => {
    this.setState({
      ...this.state,
      selectedSizeContract:selectedSizeContract
    })
    this.props.changeState({target:{name:'contractSize', value: selectedSizeContract.value}})
  }

  render() {
    const { selectedTurnover, selectedSizeContract } = this.state;
    return(
      <TurnoverComp changeState={this.props.changeState}
      updateTurnover={ this.updateTurnover }
      updateSizeContract={ this.updateSizeContract } />
    )
  }
};

export default Turnover;
