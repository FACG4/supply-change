import React from 'react';
import Select from './../../../CommonComponents/Select';
import addoptions from './add_options';

const Form = ({ handleChange, handleSelect, SERegions }) => {

  return (
    <form className='searchContractForm'>
      <div className='contractTitleDiv'>
        <input type='text' placeholder='Job title, keywords or company name' className='contractTitleDiv__input' onChange={ handleChange }/>
        <i className='far fa-keyboard'></i>
      </div>
      <div className='selectCityDiv'>
        <Select options={addoptions(SERegions)} placeholder='Select contract region...' isMulti={false}
          isClearable={true} name='city' handleSelect={ handleSelect }/>
      </div>
      {/* <div className='searchBtnDiv'>
        <button className='searchBtn'type='button'><i className='fas fa-search'></i></button>
      </div> */}
    </form>
  );
};

export default Form;
