import React, {useState} from 'react';

function Component(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(false);

    const updateName = () => {
        setName("Joao");
    }
    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployed = () => {
        setEmployed((employed ? false : true ));
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Employed: {employed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle</button>
        </div>
    );
}

export default Component