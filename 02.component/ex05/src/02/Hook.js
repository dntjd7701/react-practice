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