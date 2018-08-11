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
    path:null,
    mainId: ''
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
              mainId: 'main'
            })
          } else {
            console.log('no err',res.data)
            this.setState({
              ...this.state,
              userInfo:res.data,
              redirect:false,
              new: false,
              mainId: 'main'
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
          path:'seinformation',
          mainId: 'main'
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
          <div id={this.state.mainId} className='routerContainer'>
            <MainInfo {...this.state.userInfo} />
            <Place places = { this.state.userInfo.places_to_work_in} />
          </div>
        ): <Redirect to={`/${this.state.path}`}/>
      )
    );
  }
}

export default SEProfile;
