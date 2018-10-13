import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


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
            return axios.get(`https://open.mapquestapi.com/geocoding/v1/address?key=5vXogwcaGa9J8x6G2UbqohBdl8DQsIG1&location=${city}`)
            .then(res => {
                if (res.status !== 200) {
                  return {err:'err'}
                } else {
                  return {
                    lat: res.data.results[0].locations[0].latLng.lat,
                    lon: res.data.results[0].locations[0].latLng.lng,
                  };
                }
            })
            .catch(err => {
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
              if (latlng) {
                this.setState({
                  ...this.state,
                  lat: latlng.lat,
                  lon: latlng.lon,
                  details: result.data
                })

              } else {
                this.setState({
                  ...this.state,
                  err: 'Server Error'
                })

              }
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
                SEId: this.state.userInfo.id,
                contractId: this.props.match.params.id
            }
            )
            .then(result => {
              swal("Great!", "Your Email has sent!", "success");
            })
            .catch(err=>{
                this.setState({
                    ...this.state,
                    err: 'Server Error'
                })
            })
        }else{
            window.location = '/';
        }
    }

    componentDidMount(){
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
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
