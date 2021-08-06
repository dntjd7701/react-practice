import React, { Fragment, useState } from 'react';
import Hook from "./Hook";

export default function App() {
    const [color, setColor] = useState('#000');
    // 랜더링이 다시 시작 되면서 변경된 값을 그대로 가지고 있다.(새로 초기값이 들어가는게 아닌.)
    const [showColorBox, setShowColorBox] = useState(true);

    return (
        <Fragment>
            <h2>ex05: Hook of Functional Component</h2>
            <button onClick={ () => setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)}> change color</button>
            <br/>
            <br/>
            <input type='checkbox' value={ showColorBox } checked={ showColorBox } onChange={ () => setShowColorBox(!showColorBox) }/> Color Box 박스 보기

            {
                showColorBox ?
                <Hook color={color}/> :
                    null
            }
        </Fragment>
    );
}