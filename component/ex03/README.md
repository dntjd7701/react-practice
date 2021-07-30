### ex03: Component - React Event & State


[자세한 코드 보기 ](https://github.com/dntjd7701/react-practice/tree/main/component)

#### 01. src/01: Inline Handler
#### 02. src/02: Functional Handler (functional Component vs Class component)
#### 03. src/03: SyntheticEvent 
#### 04. src/04: Some Examples of Event Handler
#### 05. src/05: Event Handler Using 'ref' I     (Functional Component) 
#### 06. src/06: Event Handler Using 'ref' II    (Class Component)

#### Run Examples
```bash
$ npm run debug src={no}
```

---
### READ
- 함수는 함수를 호출하는 주체가 **this가** 되며, 클래스는 객체를 가리킨다.
- 함수에서의 this는 콜하는 주체에 따라 달라지므로 사용에 주의해야하며  this는 클래스 컴포넌트에서 더욱 많이 사용된다.
- state가 변경되면 reder가 실행이 된다. 
- render를 직접 호출하는 건 좋지 않은 방법이다.
- this안에 state 객체가 내장되어 있다.
- 데이터를 직접 변경시키지 않는다.
- Component 설계 규칙과 함수형 프로그래밍을 이해해야한다.
- 함수형 컴포넌트에서는 hook 함수를 사용한다.(useState)


---

### Inline Handler

- JSX에서는 이벤트에 HTML과 달리 함수 혹은 함수 객체 자체가 들어가야 한다.
- HTML과 같이 코드가 들어가면 안된다.
- 꼭 !

> 기본 틀 예시

```jsx
import React from 'react';

export default function () {
    return (
        <h1 onClick={ (e) => {} }>
            ex03 - Event Handler
        </h1>
    );
}
```

```jsx
import React from 'react';

export default function () {
    return (
        <h1 
        onClick={ (e) => { console.log('click!!'); } } 
        style={ {
            cursor:'pointer'
        } } >
            ex03 - Event Handler
        </h1>
    );
}
```
- 이벤트는 함수로, 스타일은 객체로 만들어야한다.

---

### Functional Handler

- 함수를 외부로 빼서 사용.

> Functional Component


```jsx
import React from 'react';

export default function TitelBar02() {

    const onClickHeader = () => { 
        console.log('TitelBar02 click!!');
    }

    return (
        <h1 
        onClick={ onClickHeader } 
        style={ {
            cursor:'pointer'
        } } >
            ex03 -  Functional Event Handler(Functional Component)
    </h1>
    )
}
```

- 함수형 컴포넌트에서 this는 사용하지 않는다. 
- 함수에서는 호출하는 주체가 this가 되는데 전역일수도, 엘리먼트일 수도 있다. 
- 함수형 컴포넌트에서는 hook 함수를 사용한다.(useState)
		
     - 클로저를 사용하면 사용은 되지만, state에 들어가지 않기 때문



> Class Component

```jsx
import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(){
        super(...arguments);
        // this.no = 10;
        this.state = {
            no: 10
        }
    }

    onClickHeader(e){ 
        // this.no++;
        // console.log('TitelBar01 click!!', this.no);
        // this.render();
        console.log('TitelBar01 click!!', this.state.no);
        // this.state.no++;
        this.setState({
            no: this.state.no + 1
        })
    }

    render() {
        return (
            <h1 
                onClick={ this.onClickHeader.bind(this) } 
                style={ {
                    cursor:'pointer'
                } } >
                    ex03 -  Functional Event Handler(Class Component) { /* this.no */ this.state.no }
            </h1>
        )
    }
}
```
+ 여기서의 this는 객체를 가리킨다. 
+ 이벤트는 함수, 스타일은 객체여야한다.
+ state가 변경되면 reder가 실행이 된다.
+ render를 직접 호출하는 건 좋지 않은 방법이다.
+ this안에 state 객체가 내장되어 있다.
+ state을 변경시킬 때에는 새로운 객체를 만들어주는것이 좋다. 
    - engine이 내용의 변경을 파악하는 것보다 새로운 객체의 생성과 비교가 더 효율적이기에 새로운 객체를 만들어 사용한다. 
 