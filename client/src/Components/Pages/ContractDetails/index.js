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
        return axios.get(`http://maps.google.com/maps/api/geocode/json?address=${city}&sensor=false`)
        .then(res => { 
            return {
                    lat: res.data.results[0].geometry.location.lat,
                    lon: res.data.results[0].geometry.location.lng
                };           
        }).catch(err => {
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
            //use the returned location to get the lat&lng
            this.getLatLng(result.data.contract_region)
            .then(latlng=>{
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
        if(this.state.userInfo){
            axios.post('/email',{
                seId: this.state.userInfo.id,
                contractId: this.props.match.params.id
            },
            withCredentials: true
            )
            .then(result => console.log(result))
            .catch(err=>console.log(err))
        }else{
            window.location = '/';
        }
    }

    componentDidMount(){
        const userInfo = localStorage.getItem('userInfo')
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
