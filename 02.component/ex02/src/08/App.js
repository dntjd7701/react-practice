import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
export default function App() {
    library.add(farBell, faBell, fab);

    return (
        <Fragment>
            <h2> React Awesome Font Examples </h2>
            {/* solid */}
            <FontAwesomeIcon icon={faBell} style={{color: 'red'}}/>
            <FontAwesomeIcon icon={["fa", "bell"]} style={{color: 'red'}}/>

            {/*  Regular  */}
            <FontAwesomeIcon icon={farBell}/>
            <FontAwesomeIcon icon={["far", "bell"]}/>

            {/* brands */}
            <FontAwesomeIcon icon={["fab", "github"]} style={{color: 'deeppink'}}/>
            <FontAwesomeIcon icon={["fab", "apple"]} style={{color: 'deeppink'}}/>
            <FontAwesomeIcon icon={["fab", "google"]} style={{color: 'deeppink'}}/>
            <FontAwesomeIcon icon={["fab", "microsoft"]} style={{color: 'deeppink'}}/>
            <FontAwesomeIcon icon={["fab", "microphone"]} style={{color: 'deeppink'}}/>

            {/* etc */}
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'blue'}}/>
            <FontAwesomeIcon icon={faTimesCircle} style={{color: 'orange'}}/>

            {/* size */}
            <FontAwesomeIcon icon={faBell} size='xs'/>
            <FontAwesomeIcon icon={faBell} size='lg'/>
            <FontAwesomeIcon icon={faBell} size='2x'/>
            <FontAwesomeIcon icon={faBell} size='3x'/>

        </Fragment>
    );
};