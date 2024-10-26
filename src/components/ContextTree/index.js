import React from 'react';
import Parent from './Parent';
class ContextTree extends React.PureComponent{ 
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{border:'3px solid black',padding:'25px'}}>
                <p>ContextTree</p>
                <Parent/>
            </div>
        );
    }
    
}

export default ContextTree;
