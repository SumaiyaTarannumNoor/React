import React, {useState} from 'react';

function Pagination(){
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const items = Array.from({length:54}, (_, i) => `Item ${i+1}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {Array.from({length: totalPages}, (_, i) => (
          <button key={i} onClick={() =>setCurrentPage(i+1)}>
            {i+1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination;