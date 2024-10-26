import React, { Component } from 'react';
import DataLoader from '../../components/DataLoader';
import Spinner from  './../../components/Spinner';

class LoaderPage extends Component {
    render() {
        return (
            <div>
                <DataLoader 
                    fetchCallback={() => {
                        return fetch('/users.json')
                        .then(res =>res.json())
                    }}
                    renderFunc={state=>{
                        return(
                            <div>
                                {state.isLoad ? <Spinner/>: null}
                                <ul>{state.data.map(us=><li key={us.id}>{us.name}</li>)}</ul>
                            </div>
                        )
                    }}
                />
                <DataLoader 
                    fetchCallback={() => {
                        return fetch('/phones.json')
                        .then(res =>res.json())
                    }}
                    renderFunc={state=>{
                        return(
                            <div>
                                {state.isLoad ? <Spinner/>: null}
                                <ol>{state.data.map(ph=><li key={ph.id}>{ph.brand} - {ph.model}</li>)}</ol>
                            </div>
                        )
                    }}
                />
            </div>
        );
    }
}

export default LoaderPage;
