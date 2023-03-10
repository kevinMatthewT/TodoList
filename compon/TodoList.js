import React from "react";

function TodoList({todo,setTodo}){

    
    function Deletion({id}){
        setTodo(todo.filter((todo)=>todo.id !== id));
    };
    
   
    return(
        <div>
            {todo.map((todo)=>(
                <li id="TodoList" key={todo.id}>
                    <input type="text" value={todo.title}  
                    onChange={(event)=>event.preventDefault()}></input>
                
                <div>
                    <button onClick={()=>Deletion(todo)}>complete
                    </button>
                </div>
                </li>
            )
            
            )}
        </div>
    );
}

export default TodoList;
