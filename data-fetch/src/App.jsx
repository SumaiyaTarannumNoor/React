import { useState, useEffect } from "react";

function App(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return(
    <div>
      <h1>Data Fetch</h1>
      {loading ? (
    <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => {
           return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      )
    }
    </div>
  )
  }

export default App; 