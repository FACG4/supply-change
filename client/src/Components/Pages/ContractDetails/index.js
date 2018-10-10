import React, { Component } from 'react';
import axios from 'axios';

import ContractPage from './contract_page';
import './style.css';
import { ConstructorJSONImport } from 'yandex-map-react';

export default class ContractDetails extends Component {

    state = {
        lat: null,
        lon: null,
        details: null,
        userInfo: null,
        err:null
    }

    //get the city lat and lng
    getLatLng = (city) => {
        return axios.get(`https://maps.google.com/maps/api/geocode/json?address=${city}&sensor=false`)
        .then(res => {
          console.log(res.data.results.length,'res.data.results.lenght');
          if (res.data.results.length>0) {
            console.log('11111111111111111111');
            return {
                    lat: res.data.results[0].geometry.location.lat,
                    lon: res.data.results[0].geometry.location.lng
                };
              } else {
                console.log(22222222222222222222);
                this.setState({
                  ...this.state,
                  err: 'Server Error'
                })
                throw new Error()
                // next(new Error('session not found'));
              }
        }).catch(err => {
          console.log(err,'error');
            this.setState({
                ...this.state,
                err: 'Server Error'
            })
        })
    }

    //get the company data then with the returned data use the location to get the lat and lng
    getContractInfo = (ContractId) => {
        axios.get(`/contractinfo/${ContractId}`)
        .then(result=>{
          console.log(result,'oooooooooooooooooooo');
            //use the returned location to get the lat&lng
            this.getLatLng(result.data.contract_region)
            .then(latlng=>{
              console.log(latlng);
                this.setState({
                    ...this.state,
                    lat: latlng.lat,
                    lon: latlng.lon,
                    details: result.data
                })
            })
        }).catch(err=>{
            this.setState({
                ...this.state,
                err: 'Server Error'
            })
        })

    }

    sendMsg = () => {
      console.log(this.state.userInfo,'this.state.userInfothis.state.userInfothis.state.userInfothis.state.userInfo');
        if(this.state.userInfo){
            axios.post('/email',{
                SEId: this.state.userInfo.id,
                contractId: this.props.match.params.id
            }
            )
            .then(result => console.log(result))
            .catch(err=>console.log(err))
        }else{
            window.location = '/';
        }
    }

    componentDidMount(){
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log(userInfo);
        if(userInfo){
            this.setState({
                ...this.state,
                userInfo
            })
        }else{
            window.location = '/';
        }
        this.getContractInfo(this.props.match.params.id)
    }


  render() {
    return (
      <ContractPage sendMsg={this.sendMsg} {...this.state} />
    );
  }
}
