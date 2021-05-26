import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Routes, { history } from './routes';
import $ from 'jquery';
import menuBlack from './assets/img/menuBlack.png';
import menu from './assets/img/menu.png';

export default ({ store }: any) => (
    <div>
        <Provider store={store}>
            <div>
                <Router history={history}>
                    <Routes />
                </Router>
            </div>
        </Provider>
    </div>
);

$(document).ready(function () {
    var url = window.location.href;
    var res = url.split("/");
    var screenWidth = $(window).width();
    if(res.includes('give') || res.includes('contact')){
        if (screenWidth <= 1023) {
            $("#menu").attr("style", "color:black");
            $(".menuImg").attr("src", menuBlack);
        }
    }
});

$( window ).resize(function() {
    var url = window.location.href;
    var res = url.split("/");
    var screenWidth = $(window).width();
    if(res.includes('give') || res.includes('contact')){
        if (screenWidth <= 1023) {
            $("#menu").attr("style", "color:black");
            $(".menuImg").attr("src", menuBlack);
        }else{
            $("#menu").attr("style", "color:white");
            $(".menuImg").attr("src", menu);
        }
    }
});