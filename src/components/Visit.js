import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHomeData } from '../actions/homeAction';
import vernonImg from './../assets/img/vernon.png';
import revelstokeImg from './../assets/img/contact.png';
import kelownaImg from './../assets/img/visit.png';
import c3_kelowna from './../assets/img/c3_kelowna.png';
import c3_vernon from './../assets/img/c3_vernon.png';
import c3_revelstoke from './../assets/img/c3_revelstoke.png';

class Visit extends React.Component{
    componentDidMount() {
        document.title = "Visit";
    }
    componentWillMount() {
        const { homedata, fetchHomeData } = this.props;
        if(!homedata) {
            fetchHomeData();
        }
    }
    render(){
        const { homedata } = this.props;
        return (
            <div className="visit">
                <div className="bottomImg desktop-img">
                { homedata && homedata.locations && <img className="Img_kelowna H100 w-100" src={homedata.locations[0].photo_url} alt="" />}
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
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    homedata: state.homeData.homedata
});

const mapDispatchToProps = {
    fetchHomeData
};

export default connect(mapStateToProps, mapDispatchToProps)(Visit)