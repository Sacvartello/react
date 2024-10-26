import React, { Component } from 'react';
import User from './../../components/User';
import { getUsers } from '../../api/getUsers';
import './style.css'
import Spinner from '../../components/Spinner';
class PageUsers extends Component {
    constructor(props) {
        super(props)
        this.state ={
            users:[],
            isLoading:false,
            error: null,
            page:1
        }
    }

    componentDidMount(){
        this.setState({
            isLoading:true
        })
        this.load()
    }

    load=()=>{
        getUsers(this.state.page)
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

    componentDidUpdate=(prevProps,prevState)=>{
        if(prevState.page !== this.state.page){
            this.load()
        }
    }

    nextBtnHandler=()=>{
        this.load(this.setState({
            page: this.state.page +1
        }))
    }

    render() {
        const layout = this.state.users.map(us => <User user={us} key={us.login.uuid}/>)
        const errMes = <p>Opps, something went wrong(</p>
        return (
            <section className='page'>
                <button onClick={this.nextBtnHandler}>Next page</button>
                {this.state.error && errMes}
                {this.state.isLoading && <Spinner/>}
                {layout}
            </section>
        );
    }
}

export default PageUsers;
