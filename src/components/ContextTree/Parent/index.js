import React from 'react';
import SubParent from './SubParent';
const Parent = (props) => {
    return (
        <div style={{border:'inherit',padding:'25px'}}>
            <p>Parent</p>
            <SubParent/>
        </div>
    );
}

export default Parent;
