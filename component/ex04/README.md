
[자세한 코드 보기 ](https://github.com/dntjd7701/react-practice/tree/main/component)

### ex04: Component - React State

#### 01. 기본개념
#### 02. 제어 컴포넌트
#### 03. 비제어 컴포넌트(Anti-Pattern)
#### 04. 상태(Stateful) 컴포넌트 vs Pure Component(바보, Dumb)
#### 05. Data Flow(Down-Up)

#### Run examples
```bash
$ npm run debug src={no}
```


---
### 01. 기본개념

>  State 란

- 컴포넌트 내부의 상태 관리 데이터
	
    - 데이터의 형식은 상관 없다.

- 상태의 변경은 UI를 다시 **랜더링** 하게 한다.
- **클래스 컴포넌트에서는 contructor에서 default 값 세팅으로 생성한다.**
- **함수 컴포넌트에서는 useState라는 후크 함수를 사용해서 초기화 한다. **
- 대체적으로 사용자 이벤트로 변경되거나 통신으로 변경된다.

> 예제 

_begin(초기값) step(증가치) 를 props로 넘겨 이벤트 발생시 초기값이 증가하는 예제
_ 
 
 
 1. Class Component
 
 	- 클래스형에서는 props를 constructor에서 세팅할 수 있다.
    - state는 꼭 객체로 값을 세팅해야한다.
---    
    
```jsx
import React, {Component} from 'react';

export default class extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            value: this.props.begin
        }
    }
    onClickEventHandler() {
        // this.state.value = this.state.value + this.props.step
        // 위와 같이 하면 렌더가 되지 않는다. 

        this.setState({
            value: this.state.value + this.props.step
        });
    }
    render(){
        return(
            <div>
                <button onClick={ this.onClickEventHandler.bind(this) }>
                    <strong>+</strong>
                </button>
                { '  ' }
                <span>{ this.state.value }</span>
            </div>
        )
    }
}

```
 
 2. function Component
 
 	- useState라는 후크 함수 사용
	- 후크 함수는 값에 접근할 수 있는 이름과, 값을 변경할 수 있는 함수를 던져준다.

---

```jsx
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
```

---

