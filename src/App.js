import './App.css';
import Layout from './components/Layout.js'
import {useState} from 'react'



function App() {
  const [name, setName] = useState()
  return (
    <div className="App">
       <Layout
      /> 
      {/* <form onSubmit={(e) => {
        e.preventDefault();
        console.log('submitted');
      }}>
        <input
          name='fname'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value='Submit'
          type='submit'
        />

      </form> */}
    </div>
  );
}

export default App;
