import React from 'react';

export default function Task({ name }){
    return (
        <li className='TaskList__Task'>
            <li>{ name }</li>
        </li>
    );
};  