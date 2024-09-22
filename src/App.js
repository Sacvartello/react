import React from 'react'
import Aloha from './components/Aloha';
import Lamp from './components/Light/'
import Octopus from './components/Octopus';
import Tree from './components/Tree';
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            render:true
        }
    }
    changeRender=()=>{
        this.setState({
            render:!this.state.render
        })
    }
    render(){
        return(<section>
                <button onClick={this.changeRender}>Change render</button>
                <p>Tree is {this.state.render ? 'render' : 'off render'}</p>
                {this.state.render? <Tree />: null}
            </section>)
    } 

}
export default App