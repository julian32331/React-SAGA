import React from 'react';
import contactImg from './../assets/img/contact.png';
import contactTablet from './../assets/img/giveTablet.png';
import mobileContact from './../assets/img/mobileGive.png';
import blurImg from './../assets/img/blur-other.png';

import phone from './../assets/img/phone.png';
import envelope from './../assets/img/envelope.png';

export default class Contact extends React.Component{
    componentDidMount() {
        document.title = "Contact Us";
    }
    
    render(){
        return (
            <div className="contact position-relative">
                <img src={contactImg} className="w-100 H100 desktop-img" alt=""/>
                <img src={contactTablet} className="w-100 H100 tablet-img" alt=""/>
                <img src={mobileContact} className="w-100 HF130 mobile-img" alt=""/>
                <img src={blurImg} className="blurImg" alt=""/>
                <div className="contact-us">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="bg-white p-4">
                                <div className="text-head">Contact us</div>
                                <div className="secondColor mb-3">We are here to answer any questions you may have.</div>
                                <div className="name text-left mb-3">
                                    <div className="secondColor mb-2">Name*</div>
                                    <input type="text" placeholder="Required Field" className="p-2"/>
                                </div>
                                <div className="email text-left mb-3">
                                    <div className="secondColor mb-2">Email*</div>
                                    <input type="text" placeholder="Required Field" className="p-2"/>
                                </div>
                                <div className="message text-left mb-3">
                                    <div className="secondColor mb-2">Message*</div>
                                    <textarea rows="7" placeholder="Message..." className="p-2"/>
                                </div>
                                <div className="contact-btn ml-auto">SUBMIT</div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left contact-phone-envelope">
                            <div className="bg-white p-4">
                                <div className="phone">
                                    <div className="float-left">
                                        <img src={phone} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Phone:</span>
                                        <br/>
                                        <span>250-717-7265</span>
                                    </div>
                                </div>
                                <div className="envelope mt-3">
                                    <div className="float-left">
                                        <img src={envelope} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Email:</span>
                                        <br/>
                                        <span>info@c3church.ca</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}