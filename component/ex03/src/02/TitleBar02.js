import React, { useState } from 'react';

export default function TitelBar02() {

    const onClickHeader = () => { 
        console.log('TitelBar02 click!!');
    }

    return (
        <h1 
        onClick={ onClickHeader } 
        style={ {
            cursor:'pointer'
        } } >
            ex03 -  Functional Event Handler(Functional Component)
    </h1>
    )
}