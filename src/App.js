import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {
 const[state,setState] =useState({msg:"Default Message"})
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
       <p>Message: {state.msg}</p>
       <button onClick={()=>
           fetch("/.netlify/functions/hello")
            .then(response=>response.json())
            // .then((x)=>console.log(x))
            .then((message)=>setState(message))
      }
      >
        Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
