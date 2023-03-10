import React ,{useState} from 'react';
import './App.css';
import NameTask from './components/NameTask';
import TodoList from './components/TodoList'

function App() {
  const[input,setInput]= useState("");
  const[todo,setTodo]= useState([]);
  

  return (
    
    <div className="App">
      <header>
      <h3>To Do List</h3>
      </header>
      <div>
      <NameTask 
      input={input} 
      setInput={setInput} 
      todo={todo} 
      setTodo={setTodo}>
      </NameTask>
      </div>
      <div>
        <TodoList todo={todo} setTodo={setTodo}>

        </TodoList>
      </div>
    </div>
  );
}

export default App;
