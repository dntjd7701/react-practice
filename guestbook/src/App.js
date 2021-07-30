import React from 'react';
import Guestbook from './Guestbook';
import './assets/scss/App.scss';

// [scroll] outer div와 inner div 생성
export default function App(){
    return (
        <div className={ 'App' }>
            <div>
                <Guestbook />
            </div>
        </div>
    );
};  
