import React from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Route,HashRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Me from './Me';
import Location from './Location';

{/* <div className={ 'About' }>
                    <h2> About </h2>
                </div> */}
export default function About(){
    return(
        <SiteLayout>
            <HashRouter>
                <Route component={ Navigation } />
                <Route path={'/about/me'} component={Me} />
                <Route path={'/about/location'} component={Location} />
            </HashRouter>
        </SiteLayout>
    )
}