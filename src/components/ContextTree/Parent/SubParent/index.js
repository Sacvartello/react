import React from 'react';
import Child from './Child';
const SubParent = (props) => {
    return (
        <div style={{border:'inherit',padding:'25px'}}>
            <p>SubParent</p>
            <Child/>
        </div>
    );
}

export default SubParent;
