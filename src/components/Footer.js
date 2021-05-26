import React from 'react';
import { Link } from 'react-router-dom';
import c3 from './../assets/img/c3.png';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="row desktop-tablet-img">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={c3} alt="" className="footer-c3" />
                                </div>
                                <div className="col-md-3">
                                    <ul className="p-0">
                                        <li>
                                            <Link className="link" to="/home">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/visit">Visit</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/give">Give</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="social-icon social-icon-group">
                                <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 text-right">
                            <ul className="p-0">
                                <li>
                                    <Link className="link" to="/media">Media</Link>
                                </li>
                                <li>
                                    <a className="link" href="https://c3churchglobal.com" target="_blank">C3 Global</a>
                                </li>
                                <li>
                                    <Link className="link" to="/connect">Connect Groups</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mobile-img">
                        <div className="mobile-footer-c3 mx-auto">
                            <img src={c3} alt="" className="w-100"/>
                        </div>
                        <div className="w-50 text-center m-auto">
                            <ul className="p-0">
                                <li>
                                    <a className="link" href="/home">Home</a>
                                </li>
                                <li>
                                    <a className="link" href="/visit">Visit</a>
                                </li>
                                <li>
                                    <a className="link" href="/give">Give</a>
                                </li>
                                <li>
                                    <a className="link" href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a className="link" href="/media">Media</a>
                                </li>
                                <li>
                                    <a className="link" href="/connect">Connect Groups</a>
                                </li>
                                <li>
                                    <a className="link" href="https://c3churchglobal.com" target="_blank">C3 Global</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-icon text-center">
                            <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}