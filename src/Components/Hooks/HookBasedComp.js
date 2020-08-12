import React, { useState } from 'react';

export default function HookBasedComp() {
    let initialValue = 0;
    const [count,setCount] = useState(0);  // useState : store value or initial value
    const Increment = () => {
        //setCount(count + 1);
        setCount((nextState) => nextState + 1);
    };
    const Decrement = () => {
        setCount(prevstate => prevstate - 1);
    };
    const Reset = () => {
        setCount(initialValue);
    }
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}
