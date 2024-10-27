import React from 'react';
import Parent from './Parent';
import styles from './ContextTree.module.css'
import cx from 'classnames'
import ThemeContextObj from '../../context/ThemeContext';
import withTheme from '../../HOC/withTheme';
import CONSTANS from '../../constants';
const {THEMES} = CONSTANS

class ContextTree extends React.PureComponent{ 
    constructor(props){
        super(props)
    }
    render(){
        const cnames = cx({
            [styles.lightTheme]:this.props.theme ===THEMES.LIGHT,
            [styles.darkTheme]:this.props.theme ===THEMES.DARK
        })
        return(
            <div className={cnames}>
                ContextTree
                <button onClick={this.props.callback}>Change Theme</button>
                <Parent/>
            </div>
        )
    }
    
}

export default withTheme(ContextTree);
