import React from "react";
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
import ContextTree from "./components/ContextTree";
import UserContextObj from "./context/UserContext";
import ThemeContextObj from "./context/ThemeContext";
import CONSTANS from "./constants";
const {THEMES} = CONSTANS
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "JohN",
        lastName: "Wick",
        pict: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      },
      theme:CONSTANS.THEMES.LIGHT
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  changeTheme=()=>{
    this.setState({
      theme: this.state.theme===THEMES.LIGHT? THEMES.DARK: THEMES.LIGHT
    })
  }

  render() {
    console.log(UserContextObj.Provider, UserContextObj.Consumer);
    return (
      <div>
        <ThemeContextObj.Provider value={[this.state.theme,this.changeTheme]}>
            <UserContextObj.Provider value={this.state.user}>
                <ContextTree im='v'/>
            </UserContextObj.Provider>
            <button onClick={this.logOut}>Log Out</button>
        </ThemeContextObj.Provider>
      </div>
    );
  }
}
export default App;
