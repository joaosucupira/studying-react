// Como atualizar o estado de um objeto

import React, { useState } from 'react';

function CarObject(){

    const [car, setCar] = useState({
        year: 2024,
        make: "Fiat",
        model: "Palio",
    });

    function handleCarYear(event){
        // Sintaxe da instância do objeto dentro do event
        setCar({...car, year: event.target.value});
    }
    function handleCarMake(event){
        setCar({...car, make: event.target.value});
    }
    function handleCarModel(event){
        setCar({...car, model: event.target.value});
    }

    return(
        <>
            <div>
                <p>Selected car - {car.year} {car.make} {car.model}</p>
                <input value={car.year} onChange={handleCarYear} type="number" /><br />
                <input value={car.make} onChange={handleCarMake} type="text" /><br />
                <input value={car.model} onChange={handleCarModel} type="text" /><br />
            </div>
        </>
    );
}

export default CarObject