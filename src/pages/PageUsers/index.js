import React, { Component } from 'react';
import User from './../../components/User';
import './style.css'
import Spinner from '../../components/Spinner';
class PageUsers extends Component {
    constructor(props) {
        super(props)
        this.state ={
            users:[],
            isLoading:false,
            error: null
        }
    }
    componentDidMount(){
        this.setState({
            isLoading:true
        })
        fetch('https://randomuser.me/api/?results=50')
        .then(ret =>ret.json())
        .then(data =>{
            console.log(data);
            this.setState({
                users:data.results,
            })
        })
        .catch(err=>{
            this.setState({
                error:err
            })
        })
        .finally(()=>{
            this.setState({
                isLoading:false
            })
        })
        
    }
    render() {
        const layout = this.state.users.map(us => <User user={us} key={us.login.uuid}/>)
        const errMes = <p>Opps, something went wrong(</p>
        return (
            <section className='page'>
                {this.state.error && errMes}
                {this.state.isLoading && <Spinner/>}
                {layout}
            </section>
        );
    }
}

export default PageUsers;
