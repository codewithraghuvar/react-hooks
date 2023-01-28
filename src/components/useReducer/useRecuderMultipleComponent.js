import React, {useReducer} from 'react'
const initialState = 0 
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
            return state
    }
    
}
const UseRecuderMultipleComponent  = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div>
                count: {count}
                <button onClick ={()=> dispatch('increment')}>Increment</button>
                <button onClick ={()=> dispatch('decrement')}>Decrement</button>
                <button onClick ={()=> dispatch('reset')}>Reset</button>
            </div>
            <div>
                count two: {countTwo}
                <button onClick ={()=> dispatchTwo('increment')}>IncrementTwo</button>
                <button onClick ={()=> dispatchTwo('decrement')}>Decrement Two</button>
                <button onClick ={()=> dispatchTwo('reset')}>Reset Two</button>
            </div>
        </React.Fragment>
    )

}

export default UseRecuderMultipleComponent