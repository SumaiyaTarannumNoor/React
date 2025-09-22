import React, {useState, useEffect} from 'react';

function DataFetch(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)  => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
  }, []);

  return(
    <div>
      <h1>
        Data Fetch
      </h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
          {data.map((item) => (
            <li key={item.id}>
            {item.title}
            </li>
          ))}
          </ul>
        )
      };
    </div>
  )
}

export default DataFetch;