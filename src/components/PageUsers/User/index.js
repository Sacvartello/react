import React, { Component } from 'react';
import './style.css'
const User=(props)=>{
    const {name:{first,last}, picture:{medium},location:{city,country
    },email,phone} = props.user
    return(
        <article className='card'>
            <img className='img' src={medium}/>
            <h2 className='us-name'>{first} {last}</h2>
            <p className='loc'>{city}, {country}</p>
            <p className='email'>email: {email}</p>
            <p className='phone'>phone: {phone}</p>
        </article>
    )
}

export default User;
