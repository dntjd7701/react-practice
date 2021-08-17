import React from 'react';
import SiteLayout from '../layout/SiteLayout';
import styles from '../assets/scss/component/Main.scss';


export default function Main(){
    return(
            <SiteLayout>
                {/* content */}
                <div className={styles.Main}>
                    <h1> Main </h1>
                </div>
            </SiteLayout>
    )
}