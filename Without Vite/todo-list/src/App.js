import React, {useState} from 'react';

function TodoList(){
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()){
      settodos([...todos, {text:input, completed: false}]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    settodos(newTodos);
  }

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    settodos(newTodos);
   };

   return(
    <div>
      <h1>Todo List</h1>
      <input
      type='text'
      value={input}
      onChange= {(e)=> setInput(e.target.value)}
      placeholder = 'Add a new task' 
      />
      <button onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
            style={{textDecoration: todo.completed ? 'line-through' : 'none', margin: '10px'}}
            onClick = {() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
   )
}

export default TodoList;