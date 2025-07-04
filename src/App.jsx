import { useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState("");
  const handleClick = async () => {
    const res = prompt("Enter Color Name");
    let result = await axios.get(`https://backend-1-viie.onrender.com/${res}`)
    setData(result.data);
    console.log(response.data);
  }
  return (
    <>  
      <div style={{ height: "100vh", width: "100vw", backgroundColor: data }}>
      </div>

      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default App
