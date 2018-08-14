import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LocationCopm from './Location';
import getSelected from './get_selected';

import './style.css'

class Locations extends Component {
  state = {
    selectedLocation: null,
  }

  updateLocation = (selectedLocation) => {
    this.setState({ selectedLocation });
    this.props.changeState({
      target: {
        name: 'workRegions',
        value: getSelected(selectedLocation)
      }
    })
  }

  render() {
    const { selectedLocation } = this.state;
    const { changeState } = this.props

    return(
      <LocationCopm updateLocation = { this.updateLocation } changeState = { changeState } />
    )
  }
};

export default Locations;
