import React, {useReducer, useEffect} from "react";
import axios from "axios";

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) =>{
    switch (action.type)  {
        case 'FETCH_SUCCESS':
            return {
                loading :false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading :false,
                post: {},
                error: 'error is fetching data'
            } 
        default:
            return state 
    }
}
const UseReducerEffect = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/2').then(response=>{
            dispatch({type:'FETCH_SUCCESS', payload: response.data})
        }).catch(error =>{
            dispatch({type:'FETCH_ERROR', payload: {}})
        })

    },[])

    return(
        <div>
            { state.loading? 'Loading' : state.post.title }
            { state.error? state.error : null }
        </div>
    )
}

export default UseReducerEffect
