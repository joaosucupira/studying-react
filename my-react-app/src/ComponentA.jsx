
// Prop drilling

import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA(){ 

    const [user, setUser] = useState("Joao");



    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user}></ComponentB>
        </div>
    );}

export default ComponentA