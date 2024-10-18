import React, { Component } from 'react';
import styles from'./style.module.css'
const User=(props)=>{
    const {name:{first,last}, picture:{medium},location:{city,country
    },email,phone} = props.user
    return(
        <article className={styles.card}>
            <img className={styles.img} src={medium}/>
            <h2>{first} {last}</h2>
            <p>{city}, {country}</p>
            <p className={styles.email}>email: {email}</p>
            <p className={styles.phone}>phone: {phone}</p>
        </article>
    )
}

export default User;
