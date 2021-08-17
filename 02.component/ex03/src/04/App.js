import React, { useRef, Fragment } from 'react';
import logo from '../assets/images/react-logo.png';


export default function App() {
    const imageRef = useRef(null); 
    // ref를 쓰기위해 객체를 생성한다. 
    // 여기선 ref할 상대를 알 수 없다.
    // 그렇기에 null로 세팅을한다.


    const onKeyPressInput = function(e){
        // 이름이 지정되어있다.
        // Virtual key 검색
        if(e.key = 'Enter')
        console.log(e.target.value);
    }
    const onFocusInput = function(e){
        console.log('onFocusInput');    
    }
    const onBlurInput = function(e){
        console.log('onBlurInput');
    }
    

    const onMouseOverImage = function(e){
        // 마우스 위치 
        console.log('onMouseOverImage',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseMoveImage = function(e){
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;
        // image 안에서의 좌표 구하기 
        console.log('onMouseMoveImage',`x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`);
    }
    // document.getElementById('image').offsetTop
    const onMouseOutImage = function(e){
        console.log('onMouseOutImage',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseDownImage = function(e){
        console.log('onMouseDownImage',`x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseUpImage = function(e){
        console.log('onMouseUpImage',`x=${e.clientX}, y=${e.clientY}`);
    }

    const onClickImage = function(e){
        console.log('onClickImage',`x=${e.clientX}, y=${e.clientY}`);
    }

    const onDoubleClickImage = function(e){
        console.log('onDoubleClickImage',`x=${e.clientX}, y=${e.clientY}`);
    }



    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref = { imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}