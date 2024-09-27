import React, { Component } from 'react';
import CounterBtn from './CounterBtn.js';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment=(result)=>{
        this.setState({
            counter: result+1
        })
    }
    decrement=(result)=>{
        this.setState({
            counter: result-1
        })
    }
    render() {
        const {counter} = this.state
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <CounterBtn add={this.increment} minus={this.decrement} count={counter}/>
            </div>
        );
    }
}

export default Counter
