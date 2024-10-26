import React from 'react';
import ContextObj from '../../../../../../context';


const InnerChild = (props) => {
    return (
        <ContextObj.Consumer>
            {(contextValue)=>{
                return  <div style={{border:'3px solid black',padding:'25px'}}>
                            <h1>{contextValue.user.firstName} {contextValue.user.lastName}</h1>
                        <p>InnerChild</p>
            </div>
            }}
        </ContextObj.Consumer>
    );
}

export default InnerChild;
