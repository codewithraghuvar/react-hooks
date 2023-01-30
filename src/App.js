import './App.css';
import React , { useReducer }from 'react';
/*
import UseStateComponent from './components/usestatecomponent/UseStateComponents';
import UseStatePreComponent from './components/usestatecomponent/UseStatePreComponents';
import UseStateObjectComponent from './components/usestatecomponent/UseStateObjectComponent';
import UseStateArrayComponent from './components/usestatecomponent/UseStateArrayComponent';
import UseEffectComponent from './components/useeffectcomponent/UseEffectComponent';
import UseEffectConditionalCounter from './components/useeffectcomponent/UseEffectConditionComponent';
import UseEffectAPIComponent from './components/useeffectcomponent/UseEffectAPIComponent';
import UseEffectAPICallInputButton from './components/useeffectcomponent/UseEffectAPICallInputButton';
*/
/*
import ContextComponentA from './components/useContext/ContextComponentA';
import ContextComponentB from './components/useContext/ContextComponentB';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
*/
/*
import UseRecuderSimpleComponent from './components/useReducer/UseReducerSimpleComponent';
import UseReducerComplexComponent from './components/useReducer/UseReducerComplexComponent';
import UseRecuderMultipleComponent from './components/useReducer/useRecuderMultipleComponent';
*/
import UseReducerEffect from './components/useReducerWithEffect/UseReducerEffect';
/*
import UseReducerComponentA from './components/useReducer/UseReducerComponentA';
import UseReducerComponentB from './components/useReducer/UseReducerComponentB';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
*/
function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    
    <div className="App">
     {
      /*<UseStateComponent/>*/
      /*<UseStatePreComponent/>*/ 
      /*<UseStateObjectComponent/>*/
      /*<UseStateArrayComponent/>*/
      /*<UseEffectComponent/>*/
      /*<UseEffectConditionalCounter/> */
      /*<UseEffectAPIComponent/>*/
      /*<UseEffectAPICallInputButton/>*/
      /*
      <UserContext.Provider value= {'Raghuvar'}>
        <ChannelContext.Provider value= {'code with raghuvar'}>
          <ContextComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider>     
      */
     /*
     <UseRecuderSimpleComponent/> 
     <UseReducerComplexComponent/>
     <UseRecuderMultipleComponent/>
      */
     }
     {
      /*
      count : {count}
      <UseReducerComponentA/>
      <UseReducerComponentB/>
      */
     } 
     <UseReducerEffect/>
     
    </div>
    
  );
}

export default App;
