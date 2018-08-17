import React from 'react';
import Button from '../../../CommonComponents/Button';

const Uploader = ({ handleImage, uploadImage, msg }) => {

  return (
    <section className='uploadFile__file-upload'>
      <label htmlFor='uploadFile__logo'>
        <img className='uploadFile__img-label' src='/images/upload.svg' alt='upload logo' />
      </label>
      <input id='uploadFile__logo' type='file' name='image' accept='image/*' onChange={ handleImage } required/>
      <div> { msg } </div>
      <Button className='uploadFile__btn' onClick = { uploadImage } >{ 'click to upload' }</Button>
    </section>
  );
};

export default Uploader;