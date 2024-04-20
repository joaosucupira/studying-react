import React, {useState} from 'react';

// lista de objetos pessoa. instancias = {ano de nascimento, cidade natal, profissao}
// os inputs atualizam os campos de um objeto e o passam para o array exibido ao clicar no botao


function Person(){
    const[people, setPeople] = useState([]); // array incialmente vazio

    // valores default de inicio
    const[birthYear, setBirthYear] = useState(new Date().getFullYear());
    const[birthCity, setBirthCity] = useState("");
    const[profession, setProfession] = useState("");

    // função principal que chama os sets para adicionar uma nova pessoa
    function handleAddPerson(){
        const newPerson = 
            {year: birthYear,
            city: birthCity,
            prof: profession};
        setPeople(p => [...p, newPerson]); // atualiza array assim 'pessoas anteriores + nova pessoa'

        // limpa campos de input para proxima Add
        setBirthYear(new Date().getFullYear());
        setBirthCity("");
        setProfession("");

    }
    function handleRemovePerson(index){
        setPeople(p => p.filter((_, i) => i !== index));

    }

    function handleYearChange(event){
        setBirthYear(event.target.value);

    }

    function handleCityChange(event){
        setBirthCity(event.target.value);

    }
    function handleProfessionChange(event){
        setProfession(event.target.value);

    }
    return(
        <>
            <h1>List of people</h1>
            <ul>
                {people.map((person, index) => 
                <li key={index} onClick={() => handleRemovePerson(index)}>
                    {person.year} {person.city} {person.prof}
                </li> )}
            </ul>
            <input type="number" value={birthYear} onChange={handleYearChange} /><br />
            <input type="text" value={birthCity} onChange={handleCityChange} placeholder='Enter birth city'/><br />
            <input type="text" value={profession} onChange={handleProfessionChange} placeholder='Enter profession'/><br />
            <button onClick={handleAddPerson}>Add person</button>
        </>
    );
}

export default Person 