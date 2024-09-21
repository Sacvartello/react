import React from 'react'
import Aloha from './components/Aloha';
import'./style.css';
const App = (props)=>{
    const obj = {
        fN:'Vova',
        lN:'Dvorskii'
    }
    return <h1 className='red-text'><Aloha/> {obj.fN} {obj.lN}</h1>
}
export default App