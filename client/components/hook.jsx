import React, { useState } from "react";


const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
// this is a test page
    const handleClick = (e) => {
        let number = counter;
        // ++number
        setCounter(++number)
    }
    let user = <h1>Welcome</h1>
    const handleSubmit = (e) => {
        console.log(username)
        
    }

    return (
        <div>
            <button onClick={handleClick}>Click to increment</button>
            <div>{counter}</div>
            <input type="text" id="username" onChange={(e) => {
                console.log(e.target.value)
                setUsername(e.target.value)
            }}></input>
            <button onClick={handleSubmit}>SUBMIT</button>
            {username}
        </div>
    )
}

export { Counter }; 