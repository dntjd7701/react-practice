import React from 'react';
import { HashRouter, Route, Router } from 'react-router-dom';
import  './assets/scss/App.scss';
import Main from './component/Main';
import Guestbook from './component/Guestbook';
import Gallery from './component/Gallery';
import About from './component/About';

export default function(){
    return(
        <HashRouter>
            <Route exact path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/about' component={About} />
        </HashRouter>
    )
}