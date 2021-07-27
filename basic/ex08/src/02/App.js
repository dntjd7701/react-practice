import React from 'react';

// 이름 없이 하나만 나갈 수 있음. 받을 때 이름 지정은 사용자 자유(이름을 정하지 않았기 때문)
export default function(){
    /*
     * React 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다. 

    error ) 

    <h2>App01</h2>
    <p>JSX Tutorials - 특성(2) : Single Root Node</p>

     */
    return (
        <div id='App'>
            <h>App03</h>
            hello world
            <p>JSX Tutorials - JSX로 함수 컴포넌트 작성하기</p>
        </div>
    );
};  

