import axios from "axios";
import React,{useEffect , useState} from "react";

const UseEffectAPIComponent = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then(res => {
            setPosts(res.data)
        }).catch(err =>{
            console.log(err)
        })
    
    },[])
    return (
        <div>
            <ol>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ol>    
        </div>
    )
}

export default UseEffectAPIComponent