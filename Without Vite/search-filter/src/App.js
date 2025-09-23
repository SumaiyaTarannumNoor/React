import React, {useState} from 'react';

function SearchFilter(){
  const [items, setItems] = useState([
    'Apple', 'Banana', 'Cherry', 'Date'
  ])

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>
        Search Filter
      </h1>
      <input
        type='text'
        plaseholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {
          filteredItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchFilter;