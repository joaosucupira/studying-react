// Atualização 19/04 - usando updater fucntion

import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount(c => c + 1); // Usando uma fila para aproveitar o estado a cada chamada da setCount()
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <div className="counter-box">
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}

export default Counter