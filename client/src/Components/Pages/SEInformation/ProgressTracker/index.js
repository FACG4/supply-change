import React, {Component} from 'react';
import Progress from './Progress';
import './style.css';

class ProgressTracker extends Component{   

    render(){
        return(
            <section className="ptracker__container">
                < div className = "ptracker__v-center ptracker__caution" >
                    <img className="ptracker__caution-img" src='/images/caution.svg' alt="caution"/>
                    <p>Sorry! You need to complete your full information to get Started</p>
                </div>
                <div className="ptracker__step-container ptracker__v-center">
                    <div className="progress__container">
                        <Progress selected={true} title="Business Information" img='/images/info.svg'/>
                        <Progress title="Upload logo" img='/images/camera.svg'/>
                        <Progress title="Social Impact" img='/images/social-care.svg'/>
                        <Progress title="Map" img='/images/map.svg'/>
                        <Progress title="Turnover" img='/images/line-chart.svg'/>
                        <Progress title="Policies & Governance" img='/images/policy.svg'/>
                    </div>
                    <div className="ptracker__steps-line"></div>
                </div>
                <div className="ptracker__title ptracker__v-center">Social Impact</div>
            </section>
        )
    }
}

export default ProgressTracker;