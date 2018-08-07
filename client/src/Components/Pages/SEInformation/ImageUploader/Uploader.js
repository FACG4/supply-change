import React, { Component } from 'react';
import './style.css';
import Button from '../../../CommonComponents/Button';

export default props => {
  return (
    <section className='uploadFile__file-upload'>
      <label htmlFor='uploadFile__logo'>
        <img className='uploadFile__img-label' src='/images/upload.svg' alt='upload logo' />
      </label>
      <input id='uploadFile__logo' type='file' name='image' accept='image/*' onChange={this.isImage} required/>
      <Button className='uploadFile__btn' children='click to upload'/>
    </section>
  );
};
