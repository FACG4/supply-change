import React from 'react';
import Select from 'react-select';

const optionLocation = [
  {
    value: 'Greater London.',
    label: 'Greater London.'
  }, {
    value: 'South East.',
    label: 'South East.'
  }, {
    value: 'South West.',
    label: 'South West.'
  }, {
    value: 'West Midlands.',
    label: 'West Midlands.'
  },
  {
    value: 'North West.',
    label: 'North West.'
  },
  {
    value: 'North East.',
    label: 'North East.'
  },
  {
    value: 'Yorkshire and the Humber.',
    label: 'Yorkshire and the Humber.'
  },
  {
    value: 'East Midlands.',
    label: 'East Midlands.'
  }
];

const LocationCopm = ({ selectedLocation, updateLocation }) => {

  return (
    <div >
      <div className = 'topForm'>
        <h3 className = 'title'>Where do you work? </h3>
      </div>
      <div className = 'align'>
        <div className = 'grid'>
          <div className = 'location'>
            <Select value = { selectedLocation } onChange = { updateLocation }
              options = { optionLocation } placeholder = 'Where do you work?'/>
            <div className = 'SaveInput'>
              <input className = 'SaveInput' type = 'submit' value = 'Save & Continue'/>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default LocationCopm;
