import React from "react";
import UserContextObj from "../../../../../../context/UserContext";
import ThemeContextObj from "../../../../../../context/ThemeContext";
import styles from './InnerChild.module.css'

const InnerChild = (props) => {
  return (
    <ThemeContextObj.Consumer>
        {([theme, tCallback])=>{
            return(
                <UserContextObj.Consumer>
                    {(contextValue) => {
                        return (
                        <div style={{ border: "3px solid black", padding: "25px" }}>
                            <h1>
                                {contextValue.user.firstName} {contextValue.user.lastName}
                            </h1>
                            <p>InnerChild</p>
                            <button onClick={tCallback}>Change Theme</button>
                        </div>
                        );
                    }}
                </UserContextObj.Consumer>
            )
        }}
    </ThemeContextObj.Consumer>
  );
};

export default InnerChild;
