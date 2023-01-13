import React , {useState} from "react"
const UseStateObjectComponent = () => {
    const nameObj = {firstName: '' , lastName: ''}
    const [name, setName] = useState(nameObj)
    
    return (
        <div className="formname">
            <h1>Use State Object</h1>
            <form>
                <div>
                    FirstName : 
                    <input 
                        type="text" 
                        value={name.firstName}
                        onChange={e => setName({...name, firstName: e.target.value})}/>
                </div>
                <div>
                    LastName : 
                    <input 
                        type="text"
                        value={name.lastName}
                        onChange={e => setName({...name , lastName: e.target.value})}/> 
                </div>
                <div>
                    <div> Firstname : {name.firstName}</div>
                    <div> Lastname : {name.lastName}</div>
                    <div>{JSON.stringify(name)}</div>
                </div>
            </form>
        </div>
    )
}

export default UseStateObjectComponent