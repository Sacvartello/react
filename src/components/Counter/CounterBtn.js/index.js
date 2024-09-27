import React, { Component } from 'react';

class CounterBtn extends Component {
    constructor(props) {
        super(props)
        
    }
    incrementForParent=()=>{
        this.props.add(this.props.count)
    }
    decrementForParent=()=>{
        this.props.minus(this.props.count)
    }
    render() {
        return (
            <div>
                <button onClick = {this.incrementForParent} >On</button>
                <button onClick = {this.decrementForParent} >Off</button>
            </div>
        );
    }
}

export default CounterBtn;
