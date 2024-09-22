import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns'
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(0,0,0,0,0,0,0),
            isRunning :false
        }
        this.intervalId= null
    }
    start=()=>{
        if(this.intervalId === null){
            this.intervalId = setInterval(()=>{
                this.setState({
                    time:addSeconds(this.state.time, 1),
                    isRunning:true
                })
            }, 1000)
        }
    }
    stop=()=>{
        clearInterval(this.intervalId)
        this.intervalId =null
        this.setState({
            isRunning:false
        })
    }
    restart=()=>{
        this.setState({
            time:new Date(0,0,0,0,0,0,0)
        })
    }
    componentWillUnmount(){
        this.stop()
    }
    render() {
        const callback = this.state.isRunning? this.stop: this.start
        const textOnBtn = this.state.isRunning? 'Stop':'Start'
        return (
            <div>
                <h1>{format(this.state.time,'HH:mm:ss')}</h1>
                {/* <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button> */}
                <button onClick={callback}>{textOnBtn}</button>
                <button onClick={this.restart}>Restart</button>
            </div>
        );
    }
}

export default Timer
