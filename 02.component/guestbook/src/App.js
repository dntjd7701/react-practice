import React,{ useRef } from 'react';
import Guestbook from './Guestbook';
import './assets/scss/App.scss';

// [scroll] outer div와 inner div 생성
export default function App(){
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    return (
        <div
            ref={outterRef}
            onScroll={e => {
                if(outterRef.current.scrollTop + outterRef.current.clientHeight + 20 > innerRef.current.clientHeight){
                console.log("fetch!!")
            }
            }}
            className={'App'}>
            <div ref={innerRef}>
                <Guestbook/>
            </div>
        </div>
    );
};  
