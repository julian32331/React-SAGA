import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createHashHistory } from 'history';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Home from './../components/Home';
import Visit from './../components/Visit';
import Give from './../components/Give';
import Contact from './../components/Contact';
import Media from './../components/Media';
import Connect from './../components/Connect';
import Vernon from './../components/Vernon';
import Revelstoke from './../components/Revelstoke';
import Kelowna from './../components/Kelowna';

export const history = createHashHistory();

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <div>
                <Menu />
                <Component {...props} />
                <Footer />
            </div>
        )}
    />
)
export default () => (
    <div>
        <BrowserRouter>
        <Switch>
            <PublicRoute path="/" exact component={Home}/>
            <PublicRoute path="/home" exact component={Home} />
            <PublicRoute path="/visit" exact component={Visit} />
            <PublicRoute path="/give" exact component={Give} />
            <PublicRoute path="/contact" exact component={Contact} />
            <PublicRoute path="/media" exact component={Media} />
            <PublicRoute path="/connect" exact component={Connect} />
            <PublicRoute path="/Vernon" exact component={Vernon} />
            <PublicRoute path="/Revelstoke" exact component={Revelstoke} />
            <PublicRoute path="/Kelowna" exact component={Kelowna} />
        </Switch>
        </BrowserRouter>
    </div>
);