import React from 'react';

class BOM extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            user:{
                fN:'Yaon',
                ps:12345678
            }
        }
    }
    render(){
        return (
            <div>
                <button onClick={()=>{window.localStorage.setItem('user', JSON.stringify(this.state.user))}}>Put</button>
                <button onClick={()=>{console.log(JSON.parse(window.localStorage.getItem('user')))}}>Pull</button>
            </div>
        );
    }
}
export default BOM;
