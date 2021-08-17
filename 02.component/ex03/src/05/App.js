import React, { Component } from 'react';
import './assets/scss/App.scss';

export default class extends Component{
    onScroll(e){
        console.log( this.outterRef.scrollTop, ":", this.outterRef.clientHeight, ":", this.innerRef.clientHeight );
        // clientHegith는 화면의 크기 
        // ScrollTop은 움직인 scroll의 크기
        // 그러므로, inner = clientHeight + scrollTop
    }

    render(){
        return (
            <div  
                ref={ (ref) => this.outterRef = ref }
                className={'App'}
                onScroll={ this.onScroll.bind(this) }>
                <div 
                    ref={ (ref) => this.innerRef = ref } 
                >
                    <ul>
                        {/* length만 가지고 있는 가짜 배열
                            실제 값을 가지고 있진 않기 때문에 undefined와 index을 가진다.
                            [1,2,3,4,5,6,7,8,9...]을 만들기 위해 
                            동적으로 할당한다.
                            즉, 스크롤 생성을 위해 많은 리스트를 생성하기 위함이고, 
                            새로운 정수 배열을 만들어 이용한다. */}
                        { Array.from({length: 100}, (_, i) => i+1).map(i =>
                            <li key={ i }>
                                { `아이템 ${i} 입니다.` }
                            </li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    }
}