import React from "react";
// import Aloha from './components/Aloha';
// import Lamp from './components/Light/'
import Octopus from './components/Octopus';
import Tree from './components/Tree';
// import Timer from './components/Timer';
// import Counter from './components/Counter';
// import UserForm1 from './components/UserForm1';
// import PageUsers from './pages/PageUsers';
// import ListPage from './pages/ListPage'
// import GridPage from './pages/GridPage';
// import FlexPage from './pages/FlexPage'
// import LoaderPage from './pages/LoaderPage';
//import ContextTree from "./components/ContextTree";
// import UserContextObj from "./context/UserContext";
// import ThemeContextObj from "./context/ThemeContext";
// import CONSTANS from "./constants";
// const {THEMES} = CONSTANS
import BOM from "./components/BOMexmple";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
class App extends React.Component {
  render() {

    return (
      <div>
        <Octopus/>
      </div>
    );
  }
}
export default App;
