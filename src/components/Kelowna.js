import React from 'react';
import { connect } from 'react-redux';
import { MapWithAMarker } from '../elements/map';
import { fetchKelownaLocation } from '../actions/locationAction';
import Audio from '../elements/audio';

//Images
import SliderImg from './SliderImg';
import blurImg from './../assets/img/blur.png';
import textTop from './../assets/img/text-top.png';
import kelowna1 from './../assets/img/kelowna-1.png';
import kelowna2 from './../assets/img/kelowna-2.png';
import kelowna3 from './../assets/img/kelowna-3.png';
import kelownaImg from './../assets/img/visit.png';
import c3_church_kelowna from './../assets/img/c3_church_kelowna.png';
import pastors from './../assets/img/pastors.png';
import mobileKelowna from './../assets/img/mobileKelowna.png';
import path from './../assets/img/path.png';
import clock from './../assets/img/clock.png';
import house from './../assets/img/house.png';
import phone from './../assets/img/phone.png';
import envelope from './../assets/img/envelope.png';

class Kelowna extends React.Component{
    componentDidMount() {
        document.title = "Kelowna";
    }

    componentWillMount() {
        const { locationData, fetchKelownaLocation } = this.props;
        if(!locationData) {
            fetchKelownaLocation();
        }
    }
    render(){
        const { locationData } = this.props;
        return (
            <div className="kelowna">
                <div className="position-relative">
                    {locationData && locationData.location && <img src={locationData.location.photo_url} className="backImg desktop-tablet-img" alt=""/>}
                    {locationData && locationData.location && <img src={locationData.location.logo_url} className="c3_church_kelowna desktop-tablet-img" alt=""/>}
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        {locationData && locationData.location && <img src={locationData.location.photo_url} className="banner" alt=""/>}
                        {locationData && locationData.location && <img src={locationData.location.logo_url} className="c3_church_img" alt=""/>}
                    </div>
                </div>

                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head mb-3">WELCOME TO C3 church KELOWNA</div>
                                <div className="text-content secondColor">
                                    { locationData && locationData.location && <div className="content" dangerouslySetInnerHTML={{__html: locationData.location.welcome}}></div>}
                                </div>
                                <div className="secondColor">
                                    <div className="float-left profile">
                                        <img src={pastors} alt="" className="h125"/>
                                    </div>
                                    <div className="profile-kelowna">
                                        <div className="profile-head">{locationData && locationData.location && locationData.location.pastor_name}</div>
                                        <span>Campus Pastors</span>
                                        <br/>
                                        <span>C3 Church Kelowna</span>
                                        <div className="social-kelowna">
                                            <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        JOIN US EVERY SUNDAY 10AM & 6PM
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4 img-wrap mt-3">
                            <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                <div className="flipper">
                                    <div className="front">
                                        <img src={kelowna1} className="w-100 h-1" alt=""/>
                                        <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src={kelowna1} className="w-100 h-1" alt=""/>
                                        <div className="img-description">
                                            <div className="desc-head">Lorem Ipsum&nbsp;
                                                <i className="fa fa-minus-circle tablet-mobile-img tabletImg" aria-hidden="true"></i>
                                            </div>
                                            <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 img-wrap mt-3">
                            <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                <div className="flipper">
                                    <div className="front">
                                        <img src={kelowna2} className="w-100 h-1" alt=""/>
                                        <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src={kelowna2} className="w-100 h-1" alt=""/>
                                        <div className="img-description">
                                            <div className="desc-head">Lorem Ipsum&nbsp;
                                                <i className="fa fa-minus-circle tablet-mobile-img tabletImg" aria-hidden="true"></i>
                                            </div>
                                            <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 img-wrap mt-3">
                            <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                <div className="flipper">
                                    <div className="front">
                                        <img src={kelowna3} className="w-100 h-1" alt=""/>
                                        <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src={kelowna3} className="w-100 h-1" alt=""/>
                                        <div className="img-description">
                                            <div className="desc-head">Lorem Ipsum&nbsp;
                                                <i className="fa fa-minus-circle tablet-mobile-img tabletImg" aria-hidden="true"></i>
                                            </div>
                                            <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="podcasts">
                        <div className="text-head mb-2 font-20">latest podcasts</div>
                        <div className="podcasts-player">
                        {
                            locationData && locationData.podcasts && locationData.podcasts.map((m, index) => {
                                return (
                                    <Audio key={index} idflag={true}  id={'audiosub_' + index} className="payler" title={m.title} src={m.podcast_file_path} date={m.dateof}/>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="bottom-slider">
                        <div className="text-head">
                            upcoming events
                        </div>
                        <div className="slider-img">
                        {
                            locationData && locationData.events && <SliderImg data={locationData.events} slideCount={locationData.events.length}/>
                        }    
                        </div>
                    </div>
                    <div className="service">
                        <div className="text-head mb-2 font-20">service times and directions</div>
                        <div className="row">
                            <div className="service-time">
                                <div className="clock mb-3">
                                    <div className="float-left">
                                        <img src={clock} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Service Times:</span>
                                        <br/>
                                        <span>{ locationData && locationData.location && (locationData.location.day + 's at ' + locationData.location.times) }</span>
                                    </div>
                                </div>
                                <div className="house mb-3">
                                    <div className="float-left">
                                        <img src={house} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Address:</span>
                                        <br/>
                                        <span>{ locationData && locationData.location && (locationData.location.address + ', ' + locationData.location.city + ', ' + locationData.location.province) }</span>
                                    </div>
                                </div>
                                <div className="phone mb-3">
                                    <div className="float-left">
                                        <img src={phone} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Phone:</span>
                                        <br/>
                                        <span>{ locationData && locationData.location && (locationData.location.phone) }</span>
                                    </div>
                                </div>
                                <div className="envelope mb-3">
                                    <div className="float-left">
                                        <img src={envelope} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Email:</span>
                                        <br/>
                                        <span>{ locationData && locationData.location && (locationData.location.name + '@c3church.ca') }</span>
                                    </div>
                                </div>
                            </div>
                            <div className="service-direction">
                                {
                                    locationData && locationData.location && <MapWithAMarker
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlhcI-WfSpG7oL07O4SRGVL_fM8HVJbBo&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `100%` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                        lat={ locationData.location.latitude}
                                        lng={ locationData.location.longitude}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    locationData: state.locationData.kelowna
});

const mapDispatchToProps = {
    fetchKelownaLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Kelowna)