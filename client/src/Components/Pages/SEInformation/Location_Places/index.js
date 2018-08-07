import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LocationCopm from './location';
import './style.css';

class Locations extends Component {

  state = {
    selectedLocation: null,

  }

  updateLocation = (selectedLocation) => {
    this.setState({ selectedLocation });
  }

  render() {
    const { selectedLocation } = this.state;
    return(
      <LocationCopm updateLocation={ this.updateLocation } />
    )
  }
};

export default Locations;
