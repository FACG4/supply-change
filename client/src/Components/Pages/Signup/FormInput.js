import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';

const FormInput =({ arr, handleChange }) => {
  return (
    <div>
      {arr.map(el => (
        <div className='form__field'>
          <input id={el.name} type={el.type} name={el.name} value={el.value} className='form__input' placeholder={el.placeholder} onChange={handleChange} />
          <label htmlFor={el.name}>
            <Fontawesome className='fontawesome' name={el.finame} />
            <span className='hidden' />
          </label>
        </div>
      ))
      }
    </div>
  );
};
export default FormInput;
