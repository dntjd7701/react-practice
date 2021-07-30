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