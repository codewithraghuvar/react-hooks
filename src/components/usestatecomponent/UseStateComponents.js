import React , {useState} from "react"
const UseStateComponent = () => {
    const initialCount = 0
    const [counter, setCounter] = useState(initialCount)
    
    const incrementCounterFive = () => {
        for (let i=0 ; i < 5 ;i++) {
         setCounter( counter +1)
        }
     }
    return (
        <div>
            <h1>UseState Hooks</h1>
            <div><label>Counter:</label>{counter}</div>
            <button onClick={()=>{setCounter(counter + 1)}}>Increment Counter</button>  
            <button onClick={()=>{setCounter(counter - 1)}}>Decerement Counter</button>   
            <button onClick={()=>{setCounter(initialCount)}}>Reset Counter</button>  
            <button onClick={incrementCounterFive}>Increment 5 Counter</button>   
            
        </div>
    )
}

export default UseStateComponent