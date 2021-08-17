import React from 'react';
import styles from '../assets/scss/component/Gallery.scss';
import SiteLayout from '../layout/SiteLayout';


export default function Gallery(){
    return(

        <SiteLayout>
        {/* content */}
            <div className={ styles.Gallery }>
                <h2> Gallery </h2>
            </div>
        </SiteLayout>
    )
}
