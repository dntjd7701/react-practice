import React, {Fragment} from "react";
import {PropTypes} from 'prop-types';

export default function MyComponent({props01}){
    return (
        <Fragment>
            <h2>Property Validation</h2>{}
            <span>props01: { props01 ? props01 : 'not set'}</span>
        </Fragment>
    );
}

MyComponent.propTypes = {
    // [Build-in proptypes Validator: primitive
    props01: PropTypes.string

}


// npm i -D prop-types