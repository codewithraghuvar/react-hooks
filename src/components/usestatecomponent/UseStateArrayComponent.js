import React ,{useState} from 'react'

const UseStateArrayComponent = () => {
    const [items , setItems] =useState([])
    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: 'counter ' + items.length
        }])
    }

    return (
        <div>
            <h2>Use State Management Array</h2>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseStateArrayComponent