import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomeData, sendSomeApiRequest } from '../actions/homeAction';
import SliderImg from './SliderImg';
import homeImg from './../assets/img/home.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur.png';
import textTop from './../assets/img/text-top.png';
import home4 from './../assets/img/home-4.png';
import home5 from './../assets/img/home-5.png';
import home6 from './../assets/img/home-6.png';
import vernonImg from './../assets/img/vernon.png';
import revelstokeImg from './../assets/img/contact.png';
import kelownaImg from './../assets/img/visit.png';
import c3_kelowna from './../assets/img/c3_kelowna.png';
import c3_vernon from './../assets/img/c3_vernon.png';
import c3_revelstoke from './../assets/img/c3_revelstoke.png';
import c3_church from './../assets/img/c3_church.png';
import banner from './../assets/img/banner.png';
import $ from 'jquery';

const Comp1 = props => (
    <input defaultValue={props.value} onBlur={e => props.onChanged(e.currentTarget.value)} />
);

const Comp2 = props => (
    <input defaultValue={props.value} onBlur={e => props.onChanged(e.currentTarget.value)} />
);

class Home extends React.Component{
    componentDidMount() {
        this.location();
        document.title = "Home";
    }

    componentWillMount() {
        const { homedata, fetchHomeData } = this.props;
        if(!homedata) {
            fetchHomeData();
        }
    }

    location(){
        $(".home #vernon").mouseover(function(){
            $(".home .Img_kelowna").css("opacity", "0");
            $(".home .Img_revelstoke").css("opacity", "0");
            $(".home .Img_vernon").css("opacity", "1");
        });
        $(".home #revelstoke").mouseover(function(){
            $(".home .Img_kelowna").css("opacity", "0");
            $(".home .Img_revelstoke").css("opacity", "1");
            $(".home .Img_vernon").css("opacity", "0");
        });
        $(".home #kelowna").mouseover(function(){
            $(".home .Img_kelowna").css("opacity", "1");
            $(".home .Img_revelstoke").css("opacity", "0");
            $(".home .Img_vernon").css("opacity", "0");
        });
    }
    render(){
        const { homedata, someVal, sendSomeApiRequest } = this.props;
        return (
            <div className="home">
                <div>
                    <Comp1 value={someVal} onChanged={sendSomeApiRequest} />
                    <Comp2 value={someVal} onChanged={sendSomeApiRequest} />
                </div>

                <div className="position-relative">
                    <img src={homeImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        <img src={banner} className="banner" alt=""/>
                        <img src={c3_church} className="c3_church" alt=""/>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head text-center mb-3">we’re stoked you’re here</div>
                                <div className="text-content secondColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta augue sit amet nibh placerat, a hendrerit justo vestibulum. Suspendisse potenti. Sed facilisis varius sodales. Nulla ac mi neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam pulvinar tristique mauris cursus consectetur. Aliquam non pellentesque arcu. In pellentesque orci quis laoreet varius. Pellentesque in eros gravida, mollis nulla sed, tristique nisi. Nullam lacus lacus, posuere sit amet elit sit amet, elementum sagittis turpis. Maecenas varius, felis consectetur maximus porta, massa sapien volutpat nisl, iaculis malesuada leo felis sed mauris. Morbi sit amet leo enim. Praesent auctor faucibus lorem ac tincidunt. Fusce suscipit iaculis varius.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-lg-4  mt-3">
                            <div className="row">
                                <div className="col img-wrap">
                                    <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                        <div className="flipper">
                                            <div className="front">
                                                <img src={home4} className="w-100 h-1" alt=""/>
                                                <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <img src={home4} className="w-100 h-1" alt=""/>
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
                            <div className="row mt-3 tablet-img">
                                <div className="col img-wrap">
                                    <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                        <div className="flipper">
                                            <div className="front">
                                                <img src={home6} className="w-100 h-1" alt=""/>
                                                <div className="tablet-img caption">Lorem Ipsum&nbsp;
                                                    <i className="fa fa-plus-circle tablet-mobile-img" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <img src={home6} className="w-100 h-1" alt=""/>
                                                <div className="img-description">
                                                    <div className="desc-head">Lorem Ipsum&nbsp;
                                                        <i className="fa fa-minus-circle tablet-mobile-img" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 img-wrap mt-3">
                            <div className="flip-container h-2" onTouchStart={() => "this.classList.toggle('hover')"}>
                                <div className="flipper">
                                    <div className="front">
                                        <img src={home5} className="w-100 h-2" alt=""/>
                                        <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src={home5} className="w-100 h-2" alt=""/>
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
                        <div className="col-md-6 col-lg-4 img-wrap mt-3 desktop-mobile-img">
                            <div className="flip-container h-1" onTouchStart={() => "this.classList.toggle('hover')"}>
                                <div className="flipper">
                                    <div className="front">
                                        <img src={home6} className="w-100 h-1" alt=""/>
                                        <div className="tablet-mobile-img caption tabletImg">Lorem Ipsum&nbsp;
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <img src={home6} className="w-100 h-1" alt=""/>
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
                    <div className="text-head mb-2 font-20">ONE CHURCH, THREE LOCATIONS.</div>
                </div>

                <div className="bottomImg desktop-img">
                    { homedata && homedata.locations && (
                        <div id="location">
                        <img className="Img_revelstoke" src={homedata.locations[1].photo_url} alt="" />
                        <img className="Img_vernon" src={homedata.locations[2].photo_url} alt="" />
                        <img className="Img_kelowna" src={homedata.locations[0].photo_url} alt="" />
                    </div>
                    )}
                    <div className="bottom-text w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="display-table">
                                        <Link className="link" to="/Vernon"><img src={c3_vernon} className="img-h" alt="" id="vernon"/></Link>
                                        <div className="vernon-bottom">
                                            <div className="line"></div>
                                            <div className="line-font">COMING THIS FALL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <Link className="link" to="/Revelstoke"><img src={c3_revelstoke} className="img-h" alt="" id="revelstoke"/></Link>
                                    <div className="revelstoke-bottom">
                                        <div className="line"></div>
                                        <div className="line-font">10AM</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <div className="display-table float-right">
                                        <Link className="link" to="/Kelowna"><img src={c3_kelowna} className="img-h" alt="" id="kelowna"/></Link>
                                        <div className="kelowna-bottom">
                                            <div className="line"></div>
                                            <div className="line-font">10AM & 6PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tablet-mobile-img">
                    <div className="bottomImg">
                    { homedata && homedata.locations && <img src={homedata.locations[1].photo_url} className="w-100" alt="" />}
                        <div className="bottom-text">
                            <div className="col text-center">
                                <Link className="link" to="/Revelstoke"><img src={c3_revelstoke} className="img-h" alt=""/></Link>
                                <div className="line"></div>
                                <div className="line-font">10AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomImg">
                    { homedata && homedata.locations && <img src={homedata.locations[0].photo_url} className="w-100" alt="" />}
                        <div className="bottom-text">
                            <div className="col text-center">
                                <Link className="link" to="/Kelowna"><img src={c3_kelowna} className="img-h" alt=""/></Link>
                                <div className="line"></div>
                                <div className="line-font">10AM & 6PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomImg">
                    { homedata && homedata.locations && <img src={homedata.locations[2].photo_url} className="w-100" alt="" />}
                        <div className="bottom-text">
                            <div className="col text-center">
                                <Link className="link" to="/Vernon"><img src={c3_vernon} className="img-h" alt=""/></Link>
                                <div className="line"></div>
                                <div className="line-font">COMING THIS FALL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-slider">
                    <div className="container">
                        <div className="text-head">
                            upcoming events
                        </div>
                        <div className="slider-img">
                        {
                            homedata && homedata.featured && <SliderImg data={homedata.featured} slideCount={homedata.featured.length}/>
                        } 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    homedata: state.homeData.homedata,
    someVal: state.homeData.someVal
});

const mapDispatchToProps = {
    fetchHomeData,
    sendSomeApiRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)