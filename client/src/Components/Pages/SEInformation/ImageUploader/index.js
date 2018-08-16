import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../../CommonComponents/Button';
import Uploader from './uploader';

import './style.css';

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
            },()=>{
              this.props.setImgLink(res.data.Location)
            })
            console.log('res=> ', res)
        }).catch(err => {
          console.log(err);
            this.setState({
                ...this.state,
                msg: `Can't upload the image / Check your internet connection`
            })
        });
    }

    render(){
        return(
            <Uploader handleImage={ this.handleImage } uploadImage={ this.uploadImage } msg={ this.state.msg }/>
        )
    }
}

export default ImageUploader;
