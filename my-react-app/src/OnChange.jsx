// onChange = event handler for FORM ELEMENTS
// ex. input, textarea, select, radio
// triggers every time the vale of input changes

import React, {useState} from 'react';

function OnChange(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <>
            <h2>NAME: {name}</h2>
            <input value={name} onChange={handleNameChange} />
            <h2>QUANTITY: {quantity}</h2>
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <h2>COMMENT: {comment}</h2>
            <textarea value={comment} onChange={handleCommentChange}  placeholder='Enter delivery details.'></textarea>
            <h2>PAYMENT: {payment}</h2>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <h2>Shipping: {shipping}</h2>
            <label >
                <input type="radio" value="Pick up" 
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}
                />Pick Up
            </label><br />
            <label >
                <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}
                />Delivery
            </label>

        </>
    );
}

export default OnChange