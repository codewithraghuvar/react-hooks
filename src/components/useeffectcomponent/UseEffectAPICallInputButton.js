import axios from "axios";
import React,{useEffect , useState} from "react";

const UseEffectAPIComponent = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIDfromClick] = useState(1)
    const clickHandler = ()=> {
        setIDfromClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).
        then(res => {
            setPost(res.data)
        }).catch(err =>{
            console.log(err)
        })
    
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={clickHandler}>Click</button>
            {post.id}  {post.title}
              
        </div>
    )
}

export default UseEffectAPIComponent