import React, { Component, useState } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super(...arguments);
        this.h3Ref = null;
        this.state = {
            color: null
        }
        // this.handColorChange = this.handleColorChange.bind(this);
        console.log(`[MOUNT-01]`);
    }

    /**
     *  nextProps: 다음 property 값이 가질 값을 예정함.
     *  props 로 받아온 값을 state 에 동기화.
     *   render() 는 발생하지 않는다.
     *   null 을 가질 경우 아무 것도 반환하지 않는다.
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT-02][UPDATE-01] : getDerivedStateFromProps(nextProps= ${nextProps.color}, prevState= ${prevState.color})`);
        return nextProps.color !== prevState.color ? nextProps.color : null;
    }

    /**
     *  state 이 변경 되었을 때, re-rendering 여부를 결정한다.
     *  현재 데이터: this.props, this.state
     *  변경될 데이터: nextProps, nextState
     *  로 접근이 가능하다.
     */
    shouldComponentUpdate(nextProps, nextState){
        console.log(`[UPDATE-02] : shouldComponentUpdate(${nextProps.color}, ${nextState.color})`);
        // if(nextProps === this.props || this.state === nextState){
        //     return false;
        // }
        return true;
    }

    render() {
        console.log(`[MOUNT-03][UPDATE-03] : render()`);
        return (
            <h3 style={{
                    width: 500,
                    height: 300,
                    backgroundColor: this.props.color
                }}
                ref={ (ref) => {this.h3Ref = ref;} }
            />
        );
    }


    /**
     *  render 메소드 호출 직후, DOM 에 변화를 반영하기 직전에 호출[v16.3]
     *  반환 값은 다음 메소드 componentDidUpdate() 의 3번째 파라미터로 전달된다.
     *  변경 전의 props, state 접근이 가능하다.
     *  주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 오버라이딩한다.
     *
     * @param prevProps
     * @param prevState
     */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[UPDATE-04] : getSnapshotBeforeUpdate(prevProps= ${prevProps.color},prevState= ${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }

    /**
     *  사용자가 변화된 UI를 확인,
     *  DOM 업데이트가 끝난 직후, DOM 작업이 가능하다.
     *  변경 전의 props,state 접근이 가능하다.
     * @param prevProps
     * @param prevState
     * @param snapshot
     */

    componentDidUpdate(prevProps, prevState, snapshot) {
        // const hexColor =
        // "10,20,30" -> [10,20,30] -> reduce('#' -> '#0a' -> '#0af5' -> '#0xf5ee')
        console.log(`[UPDATE-04] : componentDidUpdate(prevProps= ${prevProps.color},prevState= ${prevState.color}, snapshot= ${snapshot})`);
    }


    /**
     *  컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후
     *  다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
     *  1. 이벤트 등록
     *  2. 타이머 설정
     *  3. 네트워크 통신
     *  등을 할 수 있다.
     */
    componentDidMount() {
        console.log(`[MOUNT-04] : componentDidMount()`);
    }

    /**
     *  컴포넌트를 DOM 에서 제거 할 때, <br/>
     *  componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리먼트 등을 제거(Clean-Up)
     */

    componentWillUnmount() {
        console.log(`[UNMOUNT] : componentWillUnmount()`);
    }
}
