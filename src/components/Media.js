import React from 'react';
import { connect } from 'react-redux';
import Audio from '../elements/audio';
import { fetchPodcast } from '../actions/mediaAction';
import mediaImg from './../assets/img/media.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur-other.png';
import c3_church from './../assets/img/c3_church.png';
import $ from 'jquery';

class Media extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        document.title = "Media";
    }

    componentWillMount() {
        const { podcasts, fetchPodcast } = this.props;
        if(!podcasts) {
            fetchPodcast();
        }
    }

    render(){

        const { podcasts } = this.props;

        return (
            <div>
                <div className="position-relative">
                    <img src={mediaImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    {
                        podcasts && podcasts[0] && <Audio id="audio_0" idflag={false} title={podcasts[0].title} src={podcasts[0].podcast_file_path} date={podcasts[0].dateof}/>
                    }
                    <div className="mobile-img">
                        <img src={mediaImg} className="w-100 minH450" alt=""/>
                        <img src={c3_church} className="c3_church_other" alt=""/>
                    </div>
                </div>
                <div className="mt-4 mb-5">
                {
                    podcasts && podcasts.map((m, index) => {
                        return (
                            <Audio key={index} idflag={true}  id={'audiosub_' + index} className="payler" title={m.title} src={m.podcast_file_path} date={m.dateof}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    podcasts: state.mediaData.podcasts
});

const mapDispatchToProps = {
    fetchPodcast
};

export default connect(mapStateToProps, mapDispatchToProps)(Media)