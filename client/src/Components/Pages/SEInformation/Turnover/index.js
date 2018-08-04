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
    this.setState({ selectedTurnover });
  }

  updateSizeContract = (selectedSizeContract) => {
    this.setState({ selectedSizeContract });
  }
  
  render() {
    const { selectedTurnover, selectedSizeContract } = this.state;
    return(
      <TurnoverComp { ...this.state } updateTurnover={ this.updateTurnover } updateSizeContract={ this.updateSizeContract } />
    )
  }
};

export default Turnover;
