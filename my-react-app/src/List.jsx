// Atualização 20/04 - Atualização arrays com useState

import React, {useState} from 'react';
// import PropTypes from 'prop-types';

function List(){


    const [items, setItems] = useState([
        "Banana",
        "Watermelon",
        "Lemon",
        "Razzberry"]);

    function handleAddItem(){
        // Associação do input ao novo item do array
        const newItem = document.getElementById("itemInput").value;
        // Limpeza do campo de input
        document.getElementById("itemInput").value = "";
        // Mudança aplicada
        setItems(i => [...i, newItem]);
    }

    function handleRemoveItem(index){
        setItems(items.filter((_, i) => i !== index));
    }
    return(
        <>
            <div>
                <h1>List of food</h1>
                <ul>
                    
                    {items.map((item, index) => 
                    <li key={index} onClick={() => handleRemoveItem(index)}>
                        {item}
                        </li> )}
         
                </ul>
                <input type="text" id='itemInput' placeholder='Enter item name'/>
                <button onClick={handleAddItem}>Add item</button>
            </div>
        </>
    );
}

export default List

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical order
    // fruits.sort((a,b) => a.calories - b.calories); // Numerical order
    // const low_cal = fruits.filter(fruit => fruit.calories < 50); // Filter calories
    // const items = props.items;
    // const [foods, setFoods] = useState([{items}]);
    // const items = props.items;
    // const listItems = items.map(item => <li key={item}> 
    //     {item.name}
    //     </li>);