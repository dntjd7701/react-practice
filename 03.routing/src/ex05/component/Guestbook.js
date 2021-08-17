import React from 'react';
import styles from '../assets/scss/component/Guestbook.scss';
import SiteLayout from '../layout/SiteLayout';


export default function Guestbook(){
    return(
        <SiteLayout>
        {/* content */}
            <div className={ styles.Guestbook }>
                <h2> Guestbook </h2>
            </div>
        </SiteLayout>
    )
}
