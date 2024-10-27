import React from 'react';

class BOM extends React.Component{
    
    render(){
        return (
            <div>
                <button onClick={()=>{window.location.assign('https://google.com')}}>Assign</button>
                <button onClick={()=>{window.location.reload()}}>Reload</button>
                <button onClick={()=>{window.location.replace('https://google.com')}}>Replace</button>
            </div>
        );
    }
}
export default BOM;
