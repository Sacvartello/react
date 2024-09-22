import React, { Component } from 'react';

class Octopus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src:'/img/2.png'
        }
    }
    clickHandler=()=>{
        this.setState({src: this.state.src==='/img/2.png'?'/img/1.png':'/img/2.png'})
    }
    render() {
        return (
            <img onClick={this.clickHandler} src={this.state.src}/>
        );
    }
}

export default Octopus;
