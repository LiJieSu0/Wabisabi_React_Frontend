/* eslint-disable react/prop-types */
import { useState } from 'react';

export function NewTodoForm(props){

    const [newItem, setNewItem]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(newItem==="")return;

        props.addTodo(newItem);
        setNewItem("");
    }
    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor='item'>New Item</label>
        <input value={newItem} onChange={e=>setNewItem(e.target.value)} type='text' id="item"/>
        </div>
        <button className="btn">Submit</button>
    </form>

    )
}

