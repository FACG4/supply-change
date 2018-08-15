import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Select from './../../../CommonComponents/Select';
import getSelected from './get_selected';

import './style.css';

const array = [
  {
    label: 'employment',
    value: 'employment'
  },
  {
    label: 'disability support',
    value: 'disability support'
  },
  {
    label: 'mental health and wellbeing',
    value: 'mental health and wellbeing'
  },
  {
    label: 'poverty premium',
    value: 'poverty premium'
  },
  {
    label: 'digital inclusion',
    value: 'digital inclusion'
  },
  {
    label: 'financial inclusion' ,
    value: 'financial inclusion'
  },
  {
    label: 'youth employment' ,
    value: 'youth employment'
  },
  {
    label: 'community regeneration ',
    value: 'community regeneration'
  }
];

class SocialImpact extends Component {
  state = {
    str: '',
    selectedSocial:''
  }

  handleSelect = (selectedSocial) => {
    const value = selectedSocial ? selectedSocial.value : ''
    this.props.changeState({target:{value,name:'selectedSocial'}})
  }

  handelBox = (event) => {
    let newstr= this.state.str.includes(event.target.value) ? this.state.str.replace(event.target.value,'') : this.state.str.concat(event.target.value);
    this.setState({
      ...this.state,
      str: newstr
    },()=>{
      this.props.changeState({
        target: {
          value: this.state.str.split(''),
          name: 'socialImpactArray'
        }
      })
    })
  };

render() {

    return (
      <div className='socialImpact__mainDiv'>
        <div className='socialImpact__heading'>
          <h3 >
            Social Impact
          </h3>
        </div>
        <div className='h3__socialImpact'>
          <h3>
                  What is the main focus of your social mission?
          </h3>
        </div>
        <div className='selectImpact'>
          <Select options={array} placeholder='What is your main social mission?' isMulti={false}
            isClearable={true} name='city' handleSelect={this.handleSelect} />
        </div>
        <div className='form__field select__impact'>
          <textarea id='socialDescription' type='text' name='socialDescription' className='text__area' placeholder='- Describe your mission & impact here&#10;- Are you part of SE UK?&#10;- Do you have any awards ?' onChange = { this.props.changeState } />
        </div>
        <div className='space__mainDiv'>
          <div className='spaceDiv__img' />
        </div>
        <div className='SocialImpactDiv'>
          <div className='textDiv'>
            <p>
            Social impact is very important to us. Select any of the following that apply to you.
            </p>
          </div>
          <div className='checkbox'>
            <div className='_box _tick'>
              <div className = 'cell'>
                <label htmlFor = 'socialImpact-1'>
                  <input type = 'checkbox' name = 'socialImpact' value = '1' id = 'socialImpact-1' onChange = {this.handelBox}/>
                  <span className = 'tick'></span>
                        - We are primarily dedicated to social or environmental mission as evidenced by our governing documents
                </label>
              </div>
              <div className = 'cell'>
                <label htmlFor = 'socialImpact-2'>
                  <input type = 'checkbox' name = 'socialImpact' value = '2' id = 'socialImpact-2' onChange = {this.handelBox}/>
                  <span className = 'tick'></span>
                        - At least 51% of our profit is dedicated to the social and environmental mission
                </label>
              </div>
            </div>
            <div className = 'cell'>
              <label htmlFor = 'socialImpact-3'>
                <input type = 'checkbox' name = 'socialImpact' value = '3' id = 'socialImpact-3' onChange = {this.handelBox}/>
                <span className = 'tick'></span>
                        - We can demonstrate social/environmental impact
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialImpact;
