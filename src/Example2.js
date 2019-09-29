import React, { useState , createContext,useContext  } from 'react';
const CountContext=createContext()

function Example2(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>Example2</p>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter /> 
            </CountContext.Provider>
        </div>
    )
}
export default Example2;

function Counter(){
    const count=useContext (CountContext)
    return (<h2>{count}</h2>)
}
