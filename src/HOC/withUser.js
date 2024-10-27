import React from "react"
import UserContextObj from "../context/UserContext";

const withUser = (Component)=>(props)=>
    <UserContextObj.Consumer>
        {(user)=><Component user={user} {...props}/>}
    </UserContextObj.Consumer>

export default withUser