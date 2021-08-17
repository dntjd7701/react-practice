import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import styles from '../assets/scss/component/About.scss';


export default function About(){
    return(
        <Fragment>
            <Header/>
            <Navigation/>
                {/* content */}
                <div className={styles.About}>
                    <h2> About </h2>
                </div>
            <Footer/>
        </Fragment>
    )
}