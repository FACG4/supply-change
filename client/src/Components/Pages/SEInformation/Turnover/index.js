import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import './Style.css';
import size from './size.svg';

const optionTurnOver = [
  {
    value: ' <50k',
    label: ' <50k'
  }, {
    value: '50k-100k',
    label: '50k-100k'
  }, {
    value: '100-150k',
    label: '150-250k'
  }, {
    value: '300k +',
    label: '300k +'
  }
];
const optionSizeContract = [
  {
    value: ' <50k',
    label: ' <50k'
  }, {
    value: '50k-100k',
    label: '50k-100k'
  }, {
    value: '100-150k',
    label: '150-250k'
  }, {
    value: '300k +',
    label: '300k +'
  }
];
class Turnover extends Component {

  state = {
    selectedOption: null
  }
  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const {selectedOption} = this.state;

    return (
      <div id='main'>
      <div className='topForm'>
        <h3 className='title'>
          The size of your business
        </h3>
      </div>
      <div className='align'>
        <div className='grid'>
          <div className='business-size'>
            <div className='form__input'>
              <input id='business-size' type='number' name='' className='business-input' placeholder='Number of Employees (or FTE)' required="required"/>
              <label htmlFor='business-size'>

                <span className='hidden'/>
              </label>
            </div>
            <Select value={selectedOption} onChange={this.handleChange} options={optionTurnOver} placeholder="Last Year's turnover"/>
            <Select value={selectedOption} onChange={this.handleChange} options={optionSizeContract} placeholder="Size of contracts you are able to deliver?"/>
            <div className="SaveBtn">
              <input className="SaveBtn" type="submit" value="Save & Continue"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
  }
};
export default Turnover;
