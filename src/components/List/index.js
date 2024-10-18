import React from 'react';

const List = (props) => {
    return (
        <article>
            <h1>{props.heading}</h1>
            <ul>
                {props.children}
            </ul>
        </article>
    );
}

export default List;
