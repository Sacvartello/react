import React from "react"
import ThemeContextObj from "../context/ThemeContext"

const withTheme = (Component)=>(props)=> 
<ThemeContextObj.Consumer>
    {([theme,setTheme])=><Component theme={theme} callback={setTheme} {...props}/>}
</ThemeContextObj.Consumer>

export default withTheme