import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainInfo from './MainInfo';
import Place from './workPlaces';
import axios from 'axios';
import './style.css';

class SEProfile extends Component {

  state = {
    userInfo: {},
    id:null,
    err:null,
    redirect:false,
    new:true,
    path:null
  }

  componentDidMount() {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    if (info && info.id ) {
      if  (info.is_complete) {
        console.log(444444444);

        axios.get(`/profile/${info.id}`)
        .then(res => {
          if(res.data.err) {
            console.log('err',res.data.err);
            this.setState({
              ...this.state,
              err:res.data.err,
              redirect: true,
              new:false,
            })
          } else {
            console.log('no err',res.data)
            this.setState({
              ...this.state,
              userInfo:res.data,
              redirect:false,
              new: false,
            })
            console.log(this.state.userInfo)
          }
        });


      } else {
        console.log('else');
        this.setState({
          ...this.state,
          redirect:true,
          new: false,
          path:'seinformation'
        })


      }
      console.log('infooooo');

    } else {
      console.log('no infioooo');
      this.setState({
        ...this.state,
        redirect: true,
        new:false,
        path:'login'
      })

    }
  }


  render() {
    return (
      this.state.new? null :(
        !this.state.redirect?(
          <div>
            <MainInfo {...this.state.userInfo} />
            <Place places = { this.state.userInfo.places_to_work_in} />
          </div>
        ): <Redirect to={`/${this.state.path}`}/>
      )
    );
  }
}

export default SEProfile;
