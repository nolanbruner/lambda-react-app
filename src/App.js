import './App.css';
import React, { useState } from 'react';
import dotted from "./dotted.svg"

function App() {
  const [state, setState] = useState({ msg: "Default Message", auth: "Default Author" });
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={dotted} className="App-logo" alt="logo" height="30%" />
          <img src={dotted} className="App-logo-reverse" alt="logo" height="25%" />
          <img src={dotted} className="App-logo" alt="logo" height="20%" />
          <img src={dotted} className="App-logo-reverse" alt="logo" height="15%" />
          <img src={dotted} className="App-logo" alt="logo" height="10%" />
          <img src={dotted} className="App-logo-reverse" alt="logo" height="5%" />

        </div>
        {/* <Logo/> */}
        <p>Message: {state.msg}</p>
        <p >Author: {state.auth}</p>

        <button border-radius="25px" onClick={() => {
          setLoading(true)
          fetch("/.netlify/functions/mongo")
            .then(response => response.json())
            .then((message) => setState(message))
            .then(() => setLoading(false))
        }
          // .then(x=>console.log(x))
        }
        >
          {isLoading ? "Loading..." : "Random Stoic Quote"}
        </button>
      </header>
    </div>
  );
}

export default App;
