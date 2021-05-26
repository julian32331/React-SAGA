import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVernonLocation } from '../actions/locationAction';
import vernon from './../assets/img/vernon.png';
import vernonTablet from './../assets/img/vernonTablet.png';
import mobileVernon from './../assets/img/mobileVernon.png';
import c3_vernon_logo from './../assets/img/c3_vernon_logo.png';
import blurImg from './../assets/img/blur-other.png';

class Vernon extends React.Component{
    componentDidMount() {
        document.title = "Vernon";
    }

    componentWillMount() {
        const { locationData, fetchVernonLocation } = this.props;
        if(!locationData) {
            fetchVernonLocation();
        }
    }
    render(){
        const { locationData } = this.props;
        return (
            <div className="vernon position-relative">
                {locationData && locationData.location && <img src={locationData.location.photo_url} className="w-100 H100 desktop-img" alt=""/>}
                {locationData && locationData.location && <img src={locationData.location.photo_url} className="w-100 H100 tablet-img" alt=""/>}
                {locationData && locationData.location && <img src={locationData.location.photo_url} className="w-100 H100 mobile-img" alt=""/>}
                {locationData && locationData.location && <img src={locationData.location.logo_url} className="c3_vernon_logo desktop-tablet-img" alt=""/>}
                <img src={blurImg} className="blurImg" alt=""/>
                <div className="vernon-btn">
                    <img src={c3_vernon_logo} className="mobile-img W35 mb-3 mx-auto" alt=""/>
                    <div className="vernon-btn-head mb-3">COMING THIS FALL</div>
                    <Link to="/home"><div className="vernon-btn-content">RETURN TO HOMEPAGE</div></Link>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => ({
    locationData: state.locationData.vernon
});

const mapDispatchToProps = {
    fetchVernonLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Vernon)