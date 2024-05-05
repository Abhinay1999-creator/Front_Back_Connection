import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState({
    
  })


  const handleInput = (e) => {
  setData({...data,[e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <label>Enter your name:
          <input
            type="text"
            name="username"
            onChange={handleInput}
          />
        </label>
        <label>Enter your age:
          <input
            type="text"
            name="email"
            onChange={handleInput}
          />
        </label>
        <input type='submit'></input>
      </form>

    </div>
  );
}

export default App;
