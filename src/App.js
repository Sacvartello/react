import React from 'react'
import Aloha from './components/Aloha';
import Lamp from './components/Light/'
import Octopus from './components/Octopus';
const App = (props)=>{
    const obj = {
        fN:'Vova',
        lN:'Dvorskii'
    }
    return <Octopus key='value'/>
    //return <h1 className='red-text'><Aloha/> {obj.fN} {obj.lN}</h1>
}
export default App