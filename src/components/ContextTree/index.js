import React from 'react';
import Parent from './Parent';
import styles from './ContextTree.module.css'
import cx from 'classnames'
import ThemeContextObj from '../../context/ThemeContext';

class ContextTree extends React.PureComponent{ 
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ThemeContextObj.Consumer>
                {([theme, callback])=>{
                    const cnames = cx({
                        [styles.lightTheme]:theme ==='LIGHT',
                        [styles.darkTheme]:theme ==='DARK'
                    })
                    return(
                    <div className={cnames}>
                        ContextTree
                        <button onClick={callback}>Change Theme</button>
                        <Parent/>
                    </div>)
                }}
            </ThemeContextObj.Consumer>
        );
    }
    
}

export default ContextTree;
