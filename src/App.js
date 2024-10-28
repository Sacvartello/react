import React from "react";
// import Aloha from './components/Aloha';
// import Lamp from './components/Light/'
import Octopus from './components/Octopus';
import Tree from './components/Tree';
// import Timer from './components/Timer';
import Counter from './components/Counter';
// import UserForm1 from './components/UserForm1';
import PageUsers from './pages/PageUsers';
// import ListPage from './pages/ListPage'
// import GridPage from './pages/GridPage';
// import FlexPage from './pages/FlexPage'
import LoaderPage from './pages/LoaderPage';
import ContextTree from "./components/ContextTree";
import UserContextObj from "./context/UserContext";
import ThemeContextObj from "./context/ThemeContext";
import CONSTANS from "./constants";
import BOM from "./components/BOMexmple";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
const {THEMES} = CONSTANS

class App extends React.Component { // Parent component (батьківська компонента)
    constructor(props) {
      super(props);
      this.state = {
          user: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            imageSrc: 'https://info.renome.ua/wp-content/uploads/2022/07/placeholder.png'
          },
          theme: THEMES.LIGHT
      }
    }

    logOut = () => {
      this.setState({
        user: {}
      })
    }

    changeTheme = () => {
      this.setState({
        theme: this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
      })
    }
  
      render() {
        // console.log(ContextObj.Provider, ContextObj.Consumer)
        return ( 
          <UserContextObj.Provider value={[this.state.user]}>
          <ThemeContextObj.Provider value={[this.state.theme, this.changeTheme]}>
            <BrowserRouter>
              <Switch>
                <Route exact path='/'><Octopus /></Route> 
                <Route exact path="/bom"><BOM /> </Route>
                <Route exact path="/data" ><LoaderPage /> </Route>
                <Route exact path="/tree"><ContextTree /> </Route>
                <Route exact path='/counter'><Counter /></Route>
                <Route exact path='/userlist'><PageUsers /> </Route>
                <Route exact path="/*"><NotFound /></Route>
              </Switch>
              <ul>       
                <li><Link to='/bom'>Link to bom-component</Link></li>
                <li><Link to='/tree'>Link tree</Link></li>
                <li><Link to='/counter'>Link counter</Link></li>
                <li><Link to='/userlist'>Link to user list</Link></li>
              </ul>
            </BrowserRouter>
            </ThemeContextObj.Provider>
            </UserContextObj.Provider>
        )
      }
}


export default App;


const NotFound = () => {
  return (
    <p>404 - Page not found</p>
  )
}


