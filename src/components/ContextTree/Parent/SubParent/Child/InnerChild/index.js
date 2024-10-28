import React, { useContext } from "react";
import styles from './InnerChild.module.css'
import ThemeContextObj from "../../../../../../context/ThemeContext";
import UserContextObj from "../../../../../../context/UserContext";

const InnerChild = (props) => {
    const [theme, changeTheme] = useContext(ThemeContextObj)
    const [user] = useContext(UserContextObj)
    return (
        <div style={{ border: "3px solid black", padding: "25px" }}>
            <h1>
                {user.firstName} {user.lastName}
            </h1>
            <p>InnerChild</p>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
                   
};

export default InnerChild;
