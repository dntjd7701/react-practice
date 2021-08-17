import React, { Fragment, useState } from 'react';
import LifeCycle from "./LifeCycle";

export default function App() {
    const [color, setColor] = useState('#000');
    // 랜더링이 다시 시작 되면서 변경된 값을 그대로 가지고 있다.(새로 초기값이 들어가는게 아닌.)
    const handleClick = function(e){
        // 0xffffff
        // #998811
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        console.log(`button's onClick event occured ! : ${color}`);

    }

    return (
        <Fragment>
            <h2>React Component - LifeCycle</h2>
            <button onClick={ handleClick }> change color</button>
            <br/>
            <LifeCycle color={ color }/>
        </Fragment>
    );
}