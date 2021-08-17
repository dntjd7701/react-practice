import React, { Component } from 'react';
import './assets/scss/Clock.scss';
import Colon from './Colon';

export default class Clock extends Component {
    render() {
        return (
            <div className="Clock">

                {/* hours */}
                <div className="numbers">
                    <p>10</p>
                    <p className="placeholder"></p>
                    <p className="type">hour</p>
                </div>

               <Colon/>

                {/* minutes */}
                <div className="numbers">
                    <p>20</p>
                    <p className="placeholder"></p>
                    <p className="type">minute</p>
                </div>

                <Colon/>

                {/* seconds */}
                <div className="numbers">
                    <p>45</p>
                    <p className="placeholder"></p>
                    <p className="type">second</p>
                </div>

                {/* am-pm */}
                <div className="AmPm">
                    <div>
                        <p className={ 'on'   }>am</p>
                    </div>
                    <div>
                        <p className={ 'off' }>pm</p>
                    </div>
                </div>

            </div>
        );
    }
}