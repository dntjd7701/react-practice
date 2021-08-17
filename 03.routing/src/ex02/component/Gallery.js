import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Gallery(){
    return(
        <div>
          {/* header */}
        <div id='header'>
                <h1><NavLink to={"/"} >Header</NavLink></h1>
            </div>
            
            {/* content */}
            <div id='content'>
                <h2> Gallery </h2>
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
            <div id='footer'></div>
        </div>
    )
}