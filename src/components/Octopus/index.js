import React, { Component, useState } from 'react';

const Octopus =()=>{
    const [mood, setMood]= useState('/img/2.png')
    const clickHandler=()=>{
        setMood(mood==='sad'?'happy':'sad')
    }
    const url = mood==='sad'?'/img/1.png':'/img/2.png'
    return (
        <img onClick={clickHandler} src={url}/>
    );
}

export default Octopus;