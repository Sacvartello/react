import React from 'react'
import Aloha from './components/Aloha';
import Lamp from './components/Light/'
import Octopus from './components/Octopus';
import Tree from './components/Tree';
import Timer from './components/Timer';
import Counter from './components/Counter';
class App extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return  <div>
                    <Counter/>
                </div>
    } 

}
export default App