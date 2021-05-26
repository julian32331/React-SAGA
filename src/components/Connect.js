import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchConnectGroup } from '../actions/connectGroupAction';
import connectImg from './../assets/img/connect.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur.png';
import c3_church from './../assets/img/c3_church.png';
import textTop from './../assets/img/text-top.png';
import map from './../assets/img/staticmap.png';

class Connect extends React.Component{
    componentDidMount() {
        document.title = "Connect";
    }

    componentWillMount() {
        const { connectGroupData, fetchConnectGroup } = this.props;
        if(!connectGroupData) {
            fetchConnectGroup();
        }
    }

    render(){
        const { connectGroupData } = this.props;
        return (
            <div className="connect">
                <div className="position-relative">
                    <img src={connectImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        <img src={connectImg} className="w-100" alt=""/>
                        <img src={c3_church} className="c3_church_other" alt=""/>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head mb-3">Connect Groups</div>
                                <div className="text-content secondColor">
                                    Our connect groups are the core of who we are. Connect groups are not just another program but the place where you can grow and really be known. We run 3 seasons of Connect Groups throughout the year: fall; winter; and spring. Our current season launches the last week of September.
                                    <br/>
                                    <br/>
                                    Choose a group, contact the leader and try it out. Sometimes it takes a little while to find your fit, but you will.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                        connectGroupData && connectGroupData.map((m, index) => {
                            return (
                                <div className="col-md-6 col-lg-3" key={index}>
                                    <div className="map">
                                        <img src={'http://maps.googleapis.com/maps/api/staticmap?size=150x150&zoom=14&sensor=false&markers=' + m.latitude + '%2C' + m.longitude} alt="" width="100%" />
                                        <div id="map_1"></div>
                                        <div className="connectGroupCardContent">
                                            <div className="map-head mt-1">{m.name}</div>
                                            <div className="secondColor">{m.leader}</div>
                                            <div className="secondColor">{m.address}</div>
                                            <div className="secondColor">{m.location.name + ' Campus'}</div>
                                            <div className="secondColor">{m.phone}</div>
                                        </div>
                                        <div className="slide-bottom mb-1">
                                            <span>{moment(m.time).format("MMMM D, YYYY")}</span>
                                            <span className="float-right">{moment(m.time).format("H A")}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    connectGroupData: state.connectGroupData.connectGroup
});

const mapDispatchToProps = {
    fetchConnectGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect)