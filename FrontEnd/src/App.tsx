import axios from 'axios';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const clickFunc = async () => {
    try {
      const response = await axios.get('http://localhost:8000/');
      setValue(response.data);
      setTimeout(() => {
        setValue('');
      }, 3000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setValue('Failed to fetch data');
    }
  };

  return (
    <>
      Hello World
      <br />
      <button onClick={clickFunc}>Click me</button>
      <br />
      {value}
    </>
  );
}

export default App;
