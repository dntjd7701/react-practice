import React, { useState } from 'react';

export default function({ begin, step }){
    const [ value, setValue ] = useState(begin); 
// 값에 접근할 수 있는 이름과, 값을 변경할 수 있는 함수를 던져준다.
// 배열의 객체 분해를 활용한다.
// props 또한 객체 분해를 활용하여 가독성을 높인다. 

    const onClickEventHandler = function() {
        setValue( value + step );
    }

return(
    <div>
        <button onClick={ onClickEventHandler }>
            <strong>+</strong>
        </button>
        { '  ' }
        <span>{ value }</span>
    </div>
)
}