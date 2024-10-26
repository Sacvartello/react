import React from 'react'
// import Aloha from './components/Aloha';
// import Lamp from './components/Light/'
// import Octopus from './components/Octopus';
// import Tree from './components/Tree';
// import Timer from './components/Timer';
// import Counter from './components/Counter';
// import UserForm1 from './components/UserForm1';
// import PageUsers from './pages/PageUsers';
// import ListPage from './pages/ListPage'
// import GridPage from './pages/GridPage';
// import FlexPage from './pages/FlexPage'
// import LoaderPage from './pages/LoaderPage';
import ContextTree from './components/ContextTree'
import ContextObj from './context'
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            user:{
                id:1,
                firstName:'John',
                lastName:'Wick',
                pict:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
            }
        }
    }

    logOut=()=>{
        this.setState({
            user:{}
        })
    }

    render(){
        console.log(ContextObj.Provider, ContextObj.Consumer);
        return (<div>
                <ContextObj.Provider value={this.state}>
                    <ContextTree/>
                </ContextObj.Provider>
                <button onClick={this.logOut}>Log Out</button>
                </div>)
    } 

}
export default App