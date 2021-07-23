import React from 'react';

// import를 하지 않으면 실행 시에 오류가 발생한다.
// JSX란 아래와 같은 것을 말한다.
// Compile 혹은 Transpile 과정이 필요하며 이에 사용되는 것이 Babel이다. 

const App = function(){
    const message = "Hello World";
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default App;


