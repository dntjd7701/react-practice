import React from 'react';

export default function App() {
    const h1Styles = {
        width: 200,
        height: 500, 
        padding: 5,
        color: 'white',
        backgroundColor: '#ab47bc'

    }
    return (
        <div id='App'>
            <h1 style={ h1Styles }>Inline Styling</h1>
        </div> 
    );
};  