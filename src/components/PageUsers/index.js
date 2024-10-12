import React, { Component } from 'react';
import User from './User';
import './style.css'
class PageUsers extends Component {
    constructor(props) {
        super(props)
        this.state ={
            users:[]
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=50')
        .then(ret =>ret.json())
        .then(data =>{
            console.log(data);
            this.setState({
                users:data.results
            })
        })
    }
    render() {
        const layout = this.state.users.map(us => <User user={us} key={us.login.uuid}/>)
        return (
            <section className='page'>
                {layout}
            </section>
        );
    }
}

export default PageUsers;
