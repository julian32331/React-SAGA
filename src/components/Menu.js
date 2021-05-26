import React from 'react';
import { Link } from 'react-router-dom';
import menuImg from './../assets/img/menu.png';
import c3_church from './../assets/img/c3_church.png';
import $ from 'jquery';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            toggleMobile: true
        };
    }
    toggleDrawerMenu() {
        this.setState({
            toggle: !this.state.toggle
        });
        $(".menuBar").attr("style", "height:150px");
    }
    handleClose() {
        this.setState({
            toggle: true
        });
        $(".menuBar").attr("style", "height:0");
    }
    toggleDrawerMenuMobile() {
        this.setState({
            toggleMobile: !this.state.toggle
        });
        document.body.style.overflow = "hidden";
        $(".menuBar-mobile").attr("style", "height:100%");
        console.log("aaa");
    }
    handleCloseMobile() {
        this.setState({
            toggleMobile: true
        });
        console.log("bbb");
        document.body.style.overflow = "auto";
        $(".menuBar-mobile").attr("style", "height:0");
    }
    render(){
        return (
            <div className="menu">
                <div className="desktop-tablet-img">
                    <div className={(this.state.toggle?"menu-show":"menu-hidden")+" menu-icon"} onClick={() => this.toggleDrawerMenu()}>
                        <span className="align-middle" id="menu">MENU</span>
                        <img src={menuImg} className="menuImg" alt=""/>
                    </div>
                    <div className="menu-content menuBar">
                        <ul>
                            <li className="closeBtn">
                                <i className="fa fa-times float-right" aria-hidden="true" onClick={() => this.handleClose()}></i>
                            </li>
                            <li>
                                <Link className="link" to="/home" onClick={() => this.handleClose()}>Home</Link>
                            </li>
                            <li>
                                <Link className="link" to="/visit" onClick={() => this.handleClose()}>Visit</Link>
                            </li>
                            <li>
                                <Link className="link" to="/give" onClick={() => this.handleClose()}>Give</Link>
                            </li>
                            <li>
                                <Link className="link" to="/contact" onClick={() => this.handleClose()}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-img">
                    <div className={(this.state.toggleMobile?"menu-show":"menu-hidden")+" menu-icon"} onClick={() => this.toggleDrawerMenuMobile()}>
                        <img src={menuImg} className="menuImg" alt=""/>
                    </div>
                    <div className="mobile-menu-content menuBar-mobile">
                        <div className="mobile-closeBtn">
                            <i className="fa fa-times" aria-hidden="true" onClick={() => this.handleCloseMobile()}></i>
                        </div>
                        <ul>
                            <li className="mobile-menuImg">
                                <img src={c3_church} className="w-100" alt=""/>
                            </li>
                            <li>
                                <a className="link" href="/home" onClick={() => this.handleCloseMobile()}>Home</a>
                            </li>
                            <li>
                                <a className="link" href="/visit" onClick={() => this.handleCloseMobile()}>Visit</a>
                            </li>
                            <li>
                                <a className="link" href="/give" onClick={() => this.handleCloseMobile()}>Give</a>
                            </li>
                            <li>
                                <a className="link" href="/contact" onClick={() => this.handleCloseMobile()}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

}