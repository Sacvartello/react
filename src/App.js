import React from 'react'
import Aloha from './components/Aloha';
const App = (props)=>{
    const obj = {
        fN:'Vova',
        lN:'Dvorskii'
    }
    return <Aloha name='Pr' age={10}/>
    //return <h1 className='red-text'><Aloha/> {obj.fN} {obj.lN}</h1>
}
export default App