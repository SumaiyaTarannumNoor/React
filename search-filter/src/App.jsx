import { useState } from "react";

function App(){
  const [items] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Berry']);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
  item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);

return(
  <div>
    <h1>Search Filter</h1>
    <input placeholder="Search..." 
    onChange={(e) => setSearchTerm(e.target.value)}
    />

    <ul>
      {filteredItems.map((item, index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)
}

export default App;