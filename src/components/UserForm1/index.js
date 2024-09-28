import React, { Component } from 'react';

class UserForm1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName:'',
            userPass:''
        }
    }
    generalChange=(event)=>{
        console.log(event.target.name);
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    clickHandler=(event)=>{
        event.preventDefault()
        console.log(event);
    }
    render() {
        return (
            <form onSubmit={this.clickHandler}>
                <input 
                type='text' 
                    value={this.state.userName} 
                    onChange={this.generalChange} 
                    placeholder='Name'
                    name='userName'/>
                    
                <input 
                    type='password' 
                    value={this.state.userPass} 
                    onChange={this.generalChange} 
                    placeholder='Pass'
                    name='userPass'/>
                <button>Send</button>
            </form>
        );
    }
}

export default UserForm1
