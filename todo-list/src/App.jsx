import { useState } from "react";

function App(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {text: input, completed:false}]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

    return (
      <div>
        <h1>Todo List</h1>
        <input
        value = {input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a task'
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
            <span
            style={{textDecoration: todo.completed? "line-through": "none"}}
              onClick={() => toggleComplete(index)}>
              {todo.text}
            </span>
            <button onClick={()=> deleteTodo(index)}>Delete</button>
            </li>
          )
          )}
        </ul>
      </div>
    )
  }

export default App;