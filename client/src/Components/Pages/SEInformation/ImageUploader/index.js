import React, { Component } from 'react';
import './style.css';
import Button from '../../../CommonComponents/Button';
import axios from 'axios';

class ImageUploader extends Component{

    state = {
        image:[]
    }

    handleImage = (e) => {
        this.setState({ image: e.target.files });
    }
    
    uploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.file[0]);
        axios.post(`/upload-image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log('res=> ', response)
        }).catch(error => {
            console.log('err=> ', error)
        });
    }

    render(){
        return(
            <section id='main' className='uploadFile__file-upload'>
                <label htmlFor='uploadFile__logo'>
                    <img className='uploadFile__img-label' src='/images/upload.svg' alt='upload logo' />
                </label>
                <input id='uploadFile__logo' type='file' name='image' accept='image/*' onChange={this.isImage} required/>
                <Button className="uploadFile__btn" children="click to upload"/>
            </section>
        )
    }
} 

export default ImageUploader;