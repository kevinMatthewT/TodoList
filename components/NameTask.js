import React from "react";
//making each todo a different index
import {v4 as uuidv4} from "uuid"

function NameTask({input,setInput,todo,setTodo}){
    function FinalInput(event){
        setInput(event.target.value);
    };

    function submitting(event){
        event.preventDefault();
        setTodo([...todo,{id:uuidv4(),title:input , completed:false}]);
        setInput("");
    };

    return(

        <form onSubmit={submitting}>
            <input type="text"
            className="Input" 
            value={input}
            required 
            onChange={FinalInput}>
            </input>
            <button className="Add-todo" type="submit">
                Add
            </button>
            
        </form>
    )
}

export default NameTask;