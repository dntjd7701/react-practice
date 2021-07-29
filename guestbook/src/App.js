import React from 'react';
import Guestbook from './Guestbook';
import styles from './assets/scss/App.scss';


export default function(){
    return (
        <div className={ styles.App }>
            <Guestbook />
        </div>
    );
};  
