import React from "react";
import './style.css'


function Aloha(props){
    const usN = props.name
    return <h1 className="red-text">Hello, {usN}</h1>
}

export default Aloha