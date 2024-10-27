import React from 'react';

class BOM extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    changeScreen=()=>{
            this.setState({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }

    render(){
        window.addEventListener('resize', this.changeScreen)
        return (
            <div>
                <h1>{this.state.width} {this.state.height}</h1>
                <button onClick={()=>{
                    window.close()
                }}>Close Window</button>
            </div>
        );
    }
}
export default BOM;
