import React from 'react';
import { Collapse } from 'reactstrap';
import giveImg from './../assets/img/give.png';
import giveTablet from './../assets/img/giveTablet.png';
import mobileGive from './../assets/img/mobileGive.png';
import blurImg from './../assets/img/blur-other.png';

export default class Give extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    componentDidMount() {
        document.title = "Give";
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render(){
        return (
            <div className="give position-relative">
                <img src={giveImg} className="w-100 H100 desktop-img" alt=""/>
                <img src={giveTablet} className="w-100 H100 tablet-img" alt=""/>
                <img src={mobileGive} className="w-100 HF100 mobile-img" alt=""/>
                <img src={blurImg} className="blurImg" alt=""/>
                <div className="give-now">
                    <div className="text-head">give<i className={!this.state.collapse?"fa fa-plus-circle":"fa fa-minus-circle"} aria-hidden="true" onClick={this.toggle}></i></div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="text-left mt-2 text-collapse"> We would love to have you join us in our mission of finding people outside church, bringing them inside and helping them become who they were born to be. Your generosity enables us to help more and more people encounter the presence of God and discover His purpose for their lives. We are truly grateful for your gift and hope the convenience and simplicity of online giving will be helpful to you.</div>
                    </Collapse>
                    <div className="my-4">Thank you for your support.</div>
                    <div className="mb-5 give-btn mx-auto">GIVE NOW</div>
                    <div className="give-desc">We have partnered with Tithe.ly to provide online giving options.</div>
                </div>
            </div>
        );
    }

}