### Function Component LifeCycle : Hook

1. Alternative 1 : getDerivedStateFromProps
2. After Rendering function(entire rendering)

    - 상태 변화 -> 렌더링 -> 함수

3. 어떤 특정 값의 변화에 반응하는 After Rendering function

    - 어떤 특정 상태값 변화 -> 렌더링 -> 함수

4. Alternative 2 : componentDidMount & componentWillUnmount 대체
5. 예제 : [src/02](https://github.com/dntjd7701/react-practice/tree/main/component/ex05/src/02)


>  코드 : Hook


```jsx
import React, { Fragment ,useState, useRef, useEffect } from 'react';


export default function Hook({ color }){
    const [ boxColor, setBoxColor ] = useState(null);
    const [ title, setTitle ] = useState('');
    const h3Ref = useRef(null);

    /**
     *  1. Alternative 1 : getDerivedStateFromProps
     */
    if(boxColor !== color) {
        setBoxColor(color);
    }

    /**
     *  2. After Rendering function(entire rendering)
     *
     *  - Mount, Update 에 호출이 된다.
     *  - class component lifecycle(componentDidMount, componentDidUpdate)
     */
    useEffect( () => {
        console.log('After Rendering');
    });


    /**
     *  3. 어떤 특정 값(boxColor)의 변화에 반응하는 After Rendering function **
     *
     *   - 관심 분리
     */
    useEffect( () => {
        console.log('Update Color(DB) Using APIs...');
    }, [boxColor]);


    /**
     *  4. Alternative 2 : componentDidMount & componentWillUnmount 대체
     *
     *   -
     */
    useEffect( () => {
        console.log('After Mount(componentDidMount)');

        return (function(){
            console.log('After Unmount(componentWillUnmount)');
        }); // 함수 리턴 부분, componentWillUnmount

    }, []); // [] 자체로 componentDidMount 가 된다.


    return (
        <Fragment>
            <h3 style={{
                width: 500,
                height: 300,
                backgroundColor: color
            }}
                ref={h3Ref}
            />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
            />
        </Fragment>
    );
}
```


> 코드 : App

```jsx
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
```

---