import React,{useContext} from "react";
import { CountContext } from "../../App";
const UseReducerComponentA = () =>{
    const { countState , countDispatch }= useContext(CountContext)
    return (
      <div>
        reducer A {countState}
        <button onClick={()=> countDispatch('increment')}>
            increment
        </button>
        <button onClick={()=> countDispatch('decrement')}>
            decrement
        </button>
        <button onClick={()=> countDispatch('reset')}>
            reset
        </button>
      </div>
    )
}
export default UseReducerComponentA