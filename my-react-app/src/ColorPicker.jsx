// COLOR PICKER EXERCISE

import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#ffffff");
    function handleColorChange(event){
        setColor(event.target.value);

    }

    return (
        <>
            <div className="color-container">
                <div className="color-display" style={{backgroundColor: color}}>{color}</div>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </>
    );
}

export default ColorPicker