import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './component/Main';
import Guestbook from './component/Guestbook';
import Gallery from './component/Gallery';


export default function(){
    return(
        <HashRouter>
            <Route path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/Gallery' component={Gallery} />
        </HashRouter>
    )
}