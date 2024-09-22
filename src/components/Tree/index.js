import React, { Component } from 'react';
import Apple from './Apple';

class Tree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color:'green'
        }
    }
    componentDidMount(){
        console.log('component did mount');
    }
    shouldComponentUpdate(){
        console.log('чи потрібно мені оновлюватися?');
        return true
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    componentWillUnmount(){
        console.log('component wil unmount');
    }
    changeColor=()=>{
        this.setState({color : 'red'})
    }
    render() {
        return (
            <div onClick={this.changeColor}>
                Tree
                <Apple color={this.state.color}/>
            </div>
        );
    }
}

export default Tree
