import React, { Component } from 'react';

class DataLoader extends Component {
    constructor(props) {
        super(props)
        this.state ={
            data:[],
            error:null,
            isLoad: true
        }
    }

    componentDidMount(){
        this.props.fetchCallback()
        .then(data =>{
            console.log(data);
            this.setState({
                data:data
            })
        })
        .catch(err=>{
            this.setState({
                error:err
            })
        })
        .finally(()=>{
            this.setState({
                isLoad:false
            })
        })
    }

    render() {
        return this.props.renderFunc(this.state)
    }
}

export default DataLoader;
