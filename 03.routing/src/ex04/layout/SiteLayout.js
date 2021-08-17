import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import styles from '../assets/scss/component/Content.scss';


export default function SiteLayout({children}){
    return(
        <Fragment>
            <Header/>
            <Navigation/>
                {/* content */}
                <div className={styles.Content}>
                    {children}
                </div>
            <Footer/>
        </Fragment>
    )
}