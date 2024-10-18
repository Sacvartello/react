import React, { Component } from 'react';
import List from '../../components/List';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItem : ['item1','item2', 'item3']
        }
    }
    render() {
        const listArrey = this.state.listItem.map(li =><li>{li}</li>)
        const child = <p>Hi</p>
        return (
            <div>
                <List heading='title' children={listArrey}/>
            </div>
        );
    }
}

export default ListPage;
