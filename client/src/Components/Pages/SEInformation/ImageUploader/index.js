import React, { Component } from 'react';
import './style.css';
import Button from '../../../CommonComponents/Button';
import axios from 'axios';

class ImageUploader extends Component{

    state = {
        image:[],
        imageLink: null,
        msg: null
    }

    handleImage = (e) => {
        this.setState({
            ...this.state,
            image: e.target.files
        });
    }

    uploadImage = (e) => {
        const formData = new FormData();
        formData.append('image', this.state.image[0]);
        axios.post(`/upload-image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            this.setState({
                ...this.state,
                imageLink: res.data.Location,
                msg: 'Done uploading'
            })
            console.log('res=> ', res)
        }).catch(err => {
            this.setState({
                ...this.state,
                msg: "can't upload the image"
            })
            console.log('err=> ', err)
        });
    }

    render(){
        return(
            <section className='uploadFile__file-upload'>
                <label htmlFor='uploadFile__logo'>
                    <img className='uploadFile__img-label' src='/images/upload.svg' alt='upload logo' />
                </label>
                <input id='uploadFile__logo' type='file' name='image' accept='image/*' onChange={this.handleImage} required/>
                <div>{ this.state.msg }</div>
                <Button className="uploadFile__btn" onClick = { this.uploadImage } children="click to upload"/>
            </section>
        )
    }
}

export default ImageUploader;
