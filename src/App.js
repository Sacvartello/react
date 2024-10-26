import React from 'react'
import Aloha from './components/Aloha';
import Lamp from './components/Light/'
import Octopus from './components/Octopus';
import Tree from './components/Tree';
import Timer from './components/Timer';
import Counter from './components/Counter';
import UserForm1 from './components/UserForm1';
import PageUsers from './pages/PageUsers';
import ListPage from './pages/ListPage'
import GridPage from './pages/GridPage';
import FlexPage from './pages/FlexPage'
import LoaderPage from './pages/LoaderPage';
class App extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return  <div>
                    <LoaderPage/>
                </div>
    } 

}
export default App