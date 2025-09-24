import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function App(){
  const [name, setName] = useLocalStorage('name', '');

  return(
    <div>
      <h1>Custom Hook for Local Storage</h1>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter Your Name...'
      />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default App;