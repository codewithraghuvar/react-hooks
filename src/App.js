import './App.css';
import React from 'react';
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
import UseRecuderSimpleComponent from './components/useReducer/UseReducerSimpleComponent';
import UseReducerComplexComponent from './components/useReducer/UseReducerComplexComponent';

function App() {
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
      */
     }
      
     <UseReducerComplexComponent/>
     
    </div>
  );
}

export default App;
