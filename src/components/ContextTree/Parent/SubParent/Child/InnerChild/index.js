import React from "react";
import UserContextObj from "../../../../../../context/UserContext";
import styles from './InnerChild.module.css'

const InnerChild = (props) => {
  return (
    <UserContextObj.Consumer>
      {(contextValue) => {
        return (
          <div style={{ border: "3px solid black", padding: "25px" }}>
            <h1>
              {contextValue.user.firstName} {contextValue.user.lastName}
            </h1>
            <p>InnerChild</p>
          </div>
        );
      }}
    </UserContextObj.Consumer>
  );
};

export default InnerChild;
