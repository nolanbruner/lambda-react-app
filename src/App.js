import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {
 const[state,setState] =useState({msg:"Default Message",auth:""})
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
       <p>Message: {state.msg}</p>
       {/* {(state.auth!=="")?<p>Author: {state.auth}</p>:<></>} */}
       <button onClick={()=>
           fetch("/.netlify/functions/hello")
            .then(response=>response.json())
            .then((message)=>setState(message))
      }
      >
        Hello
        </button>
        <button onClick={()=>
           fetch("/.netlify/functions/test")
            .then(response=>response.json())
            .then((message)=>setState(message))
      }
      >
       Random Dad Joke
        </button>
        <button onClick={()=>
           fetch("/.netlify/functions/mongo")
            .then(response=>response.json())
            .then((message)=>setState(message))
            // .then(x=>console.log(x))
      }
      >
       Random Stoic Quote
        </button>
      </header>
    </div>
  );
}

export default App;
