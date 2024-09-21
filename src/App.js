import React from 'react'
import Aloha from './components/Aloha';
import Lamp from './components/Light/'
const App = (props)=>{
    const obj = {
        fN:'Vova',
        lN:'Dvorskii'
    }
    return (<section>
                <Aloha name='Pr' age={10}/>
                <Lamp lightValue={300}/>
            </section>)
    //return <h1 className='red-text'><Aloha/> {obj.fN} {obj.lN}</h1>
}
export default App