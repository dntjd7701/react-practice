import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import styles from '../assets/scss/component/Main.scss';


export default function Main(){
    return(
        <Fragment>
            <Header/>
            <Navigation/>
                {/* content */}
                <div className={styles.Main}>
                    <h1> Main </h1>
                </div>
            <Footer/>
        </Fragment>
    )
}