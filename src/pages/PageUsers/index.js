import React, { Component, useEffect, useState } from 'react';
import User from './../../components/User';
import { getUsers } from '../../api/getUsers';
import './style.css'
import Spinner from '../../components/Spinner';
const PageUsers =(props)=>{
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        setIsLoading(true)
        load()
    }, [page])

    const load=()=>{
        getUsers(page)
        .then(data =>{
            setUsers(data.results)
        })
        .catch(err=>{
            setError(err)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    // componentDidUpdate=(prevProps,prevState)=>{
    //     if(prevState.page !== this.state.page){
    //         this.load()
    //     }
    // }
    function nextBtnHandler(){
        load(setPage(page +1))
    }
    const prevBtnHandler=()=>{
        if(page > 1){
            load(setPage(page -1))
        }
    }

    const layout = users.map(us => <User user={us} key={us.login.uuid}/>)
    const errMes = <p>Opps, something went wrong(</p>
    return (
        <section className='page'>
            {isLoading? null: <button onClick={prevBtnHandler}>Prev page</button>}
            {isLoading? null: <button onClick={nextBtnHandler}>Next page</button>}
            {error && errMes}
            {isLoading && <Spinner/>}
            {isLoading? null: layout}
        </section>
    );
}

export default PageUsers;
