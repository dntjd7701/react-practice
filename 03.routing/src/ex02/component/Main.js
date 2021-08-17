import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Main(){
    return(
        <Fragment>
            {/* header */}
            <div id='header'>
                <h1><NavLink to={"/"} >Header</NavLink></h1>
            </div>
            
            {/* content */}
            <div id='content'>
                <h1> Main </h1>
            </div>

            {/* navigation */}
            <div id='navigation'>
                {
                    <ul>
                        <li><NavLink to={"/guestbook"} >[Guestbook]</NavLink></li>
                        <li><NavLink to={"/gallery"} >[Gallery]</NavLink></li>
                    </ul>
                }
            </div>
            {/* footer */}
            <div id='footer'>
                <p>(c)opyright 2021 made by woosung</p>
            </div>
        </Fragment>
    )
}