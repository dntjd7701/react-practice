import React from 'react';
import styles from '../assets/scss/component/About.scss';
import SiteLayout from '../layout/SiteLayout';

export default function About(){
    return(
        <SiteLayout>
        {/* content */}
            <div className={ styles.About }>
                <h2> About </h2>
            </div>
        </SiteLayout>
    )
}