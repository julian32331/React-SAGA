import React from 'react';
import Slider from 'react-slick';
import moment from 'moment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home1 from './../assets/img/home-1.png';
import home2 from './../assets/img/home-2.png';
import home3 from './../assets/img/home-3.png';

export default class SimpleSlider extends React.Component{
    render(){

        const { data, slideCount } = this.props;

        var settings = {
            slidesToShow: slideCount > 3 ?  3: slideCount,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: slideCount > 2 ?  2: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        const repeatCount = [1, 2, 3];
        return (
            <Slider {...settings}>
            {   
            
                    data && data.map((m, index) => {
                        return (
                        <div className="p-2" key={index}>
                            <img src={m.image_url} alt="" className={slideCount>2?'w100':(slideCount==2?'w65':'w33')}/>
                            <div className="slide-head mt-1">{m.title}</div>
                            {/* <div className="slide-text my-1">{m.description}</div> */}
                            <div className={"slide-bottom mb-1 " + (slideCount>2?'w100':(slideCount==2?'w65':'w33'))}>
                                <span>{moment(m.starttime).format("MMMM D, YYYY")}</span>
                                <span className="float-right">{moment(m.starttime).format("h A")}</span>
                            </div>
                        </div>
                        )
                    })
            }
            </Slider>
        );
    }

}