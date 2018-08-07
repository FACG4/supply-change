import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BusinessInfo from './BusinessInfo';
import ProgressTracker from './ProgressTracker';
import Turnover from './Turnover';
// import Locationandplaces from './Location_Places';/
// import UploadLogo from './UploadLogo';

class SEInofrmation extends Component {
  state = {
    companyLocation:'',
    companyAddress:'',
    SICCode: '',
    director: '',
    companyStructure: '',
    tradeType: '',
    companyDescription: ''
  }
  changeState = ({target}) => {
    const {value, name}= target
    this.setState ({
      ...this.state,
      [name]: value
    })
    console.log(this.state);
  }

  render() {
    return (
      <div >
        <ProgressTracker />
        <BusinessInfo changeState = {this.changeState} />
        {/* <Locationandplaces /> */}

        <Turnover />
        {/* <UploadLogo /> */}
      </div>
    );
  }
}

export default SEInofrmation;
