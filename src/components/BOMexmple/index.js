import React from 'react';

class BOM extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    componentDidMount(){
        window.addEventListener('resize', this.changeScreen)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.changeScreen)
    }
    changeScreen=()=>{
            this.setState({
                width:window.innerWidth,
                height:window.innerHeight
            })
    }
    render(){
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
