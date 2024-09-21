import React from "react";
class Lamp extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            ligth:'on'
        }
    }
    changeLamp=()=>{
        this.setState({
            ligth:'off'
        })
    }
    render=()=>{
        return <h1 onClick={this.changeLamp}>Lamp {this.state.ligth} {this.props.lightValue}</h1>
    }
}
export default Lamp