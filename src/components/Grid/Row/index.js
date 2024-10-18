import React, { Children } from 'react';

const Row = (props) => {
    const {children} = props
    return (
        <div style={{display: 'flex'}}>
            {children}
        </div>
    );
}

export default Row;
