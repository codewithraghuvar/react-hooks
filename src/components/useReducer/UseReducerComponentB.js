import React,{useContext} from "react";
import { CountContext } from "../../App";

const UseReducerComponentB = () =>{
    const { countState , countDispatch }= useContext(CountContext)
    return (
      <div>
        reducer B  {countState}
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
export default UseReducerComponentB