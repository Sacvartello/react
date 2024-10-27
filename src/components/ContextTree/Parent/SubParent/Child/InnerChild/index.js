import React from "react";
import withUser from "../../../../../../HOC/withUser";
import withTheme from "../../../../../../HOC/withTheme";
import styles from './InnerChild.module.css'

const InnerChild = (props) => {
    console.log(props);
    return (
        <div style={{ border: "3px solid black", padding: "25px" }}>
            <h1>
                {props.user?.firstName} {props.user?.lastName}
            </h1>
            <p>InnerChild</p>
            <button onClick={props.callback}>Change Theme</button>
        </div>
    );
                   
};

export default withTheme(withUser(InnerChild));
