import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fontawesome from 'react-fontawesome';

const Input =({ arr, handleChange }) => {
  return (
    <div>
      {arr.map(el => (
        <div className='form__field'>
          <input id={el.id} type={el.type} name={el.name} value={el.value} className={el.className} placeholder={el.placeholder} onChange={handleChange} />
          <label htmlFor={el.htmlFor}>
            <Fontawesome className='fontawesome' name={el.finame} />
            <span className='hidden' />
          </label>
        </div>

      ))
      }
    </div>
  );

};
export default Input;
